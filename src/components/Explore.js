import React from 'react'
import { connect } from 'react-redux'
import { switchGameMode, applyingRateTower } from '../redux/actions'
import { Header, Button, Grid } from 'semantic-ui-react'
// import sound from '../audio/Pixel adventures.mp3'

class Explore extends React.Component {
  constructor(props){
    super(props)

    /* Setting up Board Pieces */
    let board = [];
    for(let i = 0; i < 20; i++){
      board.push(new Array(30).fill('brown'))
    }
    let ship = { y: 11, x: 2 };
    board[ship.y][ship.x] = 'white'

    let rocks = [];
    for(let i = 0; i < 30; i++){
      let x = 10 + i;
      let y = Math.floor(Math.random() * 7);
      let u = Math.round(Math.random() * 1);
      let l = Math.floor(Math.random() * (10 - 5) + 5)
      rocks.push({
        x: x,
        y: y,
        upright: u,
        length: l
      })
    }

    /* Create Game Environment */
    this.state = {
      board: board,
      ship: ship,
      rocks: rocks,
      score: 0,
      gameOver: true
    }

    /* Initialize Game */
    this.travelId = setInterval( () => {
      if(this.state.gameOver){
        return
      }

      let newBoard = [];
      for(let i = 0; i < 20; i++){
        newBoard.push(new Array(30).fill('brown'))
      }

      let newRocks = [...this.state.rocks];
      for(let i = 0; i < newRocks.length; i++){
        newRocks[i].x--
        if(newRocks[i].x < 0){
          newRocks[i].x = 29
          newRocks[i].y = Math.floor(Math.random() * (10 - 7) + 7)
          newRocks[i].upright = Math.round(Math.random() * 1)
        }
      }

      for(let i = 0; i < newRocks.length; i++){
        for(let j = 0; j < newRocks[i].y; j++){
          if(newRocks[i].upright){
            newBoard[19-j][newRocks[i].x] = 'black'
            newBoard[19-j][newRocks[i].x] = 'black'
          }
          else {
            newBoard[j][newRocks[i].x] = 'black'
            newBoard[j][newRocks[i].x] = 'black'
          }
        }
      }

      let newShip = this.state.ship
      newShip.y++

      for(let i = 0; i < 20; i++){
        if(newBoard[i][2] === 'black' && newShip.y === i){
          newShip.y = 10
          this.setState({ gameOver: true})
          clearInterval(this.scoreId)
        }
      }
      if(newShip.y < 0 || newShip.y > 19){
        newShip.y = 10
        this.setState({ gameOver: true })
        clearInterval(this.scoreId)
      }

      newBoard[newShip.y][newShip.x] = 'white'

      this.setState({
        board: newBoard,
        ship: newShip,
        rocks: newRocks
      })
    }, 200 )

    this.scoreId = setInterval( () => {
      if(this.state.gameOver){
        return
      }
      let scoreCopy = ++this.state.score
      this.setState({ score: scoreCopy })
    }, 1000 )
  }

  handleFlying = event => {
    if(this.state.gameOver){
      return
    }
    //for clicking
    let newShip = this.state.ship
    newShip.y-= 2
    this.setState({ ship: newShip })

    // console.log(event)
    // let newShip = this.state.ship
    // if(event.key == 'w'){
    //   newShip.height-= 1
    //   this.setState({ship: newShip})
    // }
    // else if(event.key == 's'){
    //   newShip.height+= 1
    //   this.setState({ship: newShip})
    // }
    // else if(event.key == 'd'){
    //   newShip.position++
    //   this.setState({ship: newShip})
    // }
    // else if(event.key == 'a'){
    //   newShip.position--
    //   this.setState({ship: newShip})
    // }
  }

  switchBack = () => {
    // this.setState({gameOver: false}
    let winnings = this.state.score * 2
    let tower = {
      ...this.props.tower,
      resources: this.props.tower.resources + winnings
    }
    this.props.applyingRateTower(tower)
    this.props.switchGameMode()
  }

  startGame = () => {
    this.setState({ gameOver: false })
  }

  render(){
    return (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <Header inverted size='huge'>
                Time Alive: {this.state.score}
              </Header>
              <Header inverted size='huge'>
                Resources Collected: {this.state.score * 2}
              </Header>
            </Grid.Column>
            <Grid.Column width={8}>
              <div
                id="space-travel"
                tabIndex="0"
                onClick={this.handleFlying}>
                <Board board={this.state.board}/>
                {this.state.gameOver ?
                  <div>
                    {
                      this.state.score > 0 ?
                      <Button onClick={this.switchBack}>
                        Return to Bunker
                      </Button>
                      :
                      <Button onClick={this.startGame}>
                        Start
                      </Button>
                    }
                  </div>
                  : null
                }
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted size='huge'>
                DIRECTIONS: <br/> CLICK THE COLORED BOARD IN THE MIDDLE OF THE SCREEN TO FLY UP! <br/> THE LONGER YOU FLY, THE MORE RESOURCES YOU GET!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameMode: state.gameMode,
    tower: state.tower
  }
}

export default connect(mapStateToProps, { switchGameMode, applyingRateTower })(Explore)


///////////////////////////
/* GAME BOARD COMPONENTS */
///////////////////////////

const BoardCell = props => {
  return (
    <div style={{
      width: '20px',
      height: '20px',
      backgroundColor: props.cell === "white" ? "brown" : props.cell,
      backgroundSize: '20px 20px',
      backgroundImage: props.cell === "white" ? 'url(https://i.imgur.com/5fLOrIr.png)' : null}}>
    </div>
  )
}

const BoardRow = props => {
  let style = {
    display: 'flex'
  }
  return(
    <div style={style}>
      {props.row.map( (cell, index) => {
        return <BoardCell cell={cell} key={index}/>
        })
      }
    </div>
  )
}

const Board = props => {
  return (
    <div>
      {props.board.map( (row, index) => {
        return <BoardRow row={row} key={index}/>
        })
      }
    </div>
  )
}
