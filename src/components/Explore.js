import React from 'react'
import { connect } from 'react-redux'
import { switchGameMode, applyingRateTower } from '../redux/actions'
import { Header, Button, Grid } from 'semantic-ui-react'

///////////// CHECK IF EDGES END GAME
class Explore extends React.Component {
  constructor(props){
    super(props)

    /* Setting up Board Pieces */
    let board = [];
    for(let i = 0; i<20; i++){
      board.push(new Array(30).fill('brown'))
    }
    let ship = { height: 11, position: 2 };
    board[ship.height][ship.position] = 'white'

    let rocks = [];
    for(let i = 0; i<30; i++){
      let p = Math.floor(Math.random() * 22);
      let h = Math.floor(Math.random() * 7);
      let u = Math.round(Math.random() * 1);
      let l = Math.floor(Math.random() * 7)
      rocks.push({ position: 7 + p, height: h, upright: u, length: l })
    }

    /* Create Game Environment */
    this.state = {
      board: board,
      ship: ship,
      rocks: rocks,
      score: 0,
      gameOver: false
    }

    /* Initialize Game */

    this.travelId = setInterval(() => {
      if(this.state.gameOver){
        return
      }

      let boardCopy = [];
      for(let i = 0; i<20; i++){
        boardCopy.push(new Array(30).fill('brown'))
      }

      let rocksCopy = [...this.state.rocks];
      for(let i = 0; i < rocksCopy.length; i++){
        rocksCopy[i].position--
        if(rocksCopy[i].position < 0){
          rocksCopy[i].position = 29
          rocksCopy[i].height = Math.floor(Math.random() * 7) + 3
          rocksCopy[i].upright = Math.round(Math.random() * 1)
          rocksCopy[i].length = Math.floor(Math.random() * 7)
        }
      }

      for(let i = 0; i < rocksCopy.length; i++){
        for(let j = 0; j < rocksCopy[i].height; j++){
          for(let k = 0; k < rocksCopy[i].length; k++){
            if(rocksCopy[i].upright){
              boardCopy[19-j][rocksCopy[i].position] = 'black'
              boardCopy[19-j][rocksCopy[i].position + k] = 'black'
            }
            else {
              boardCopy[j][rocksCopy[i].position] = 'black'
              boardCopy[j][rocksCopy[i].position + k] = 'black'
            }
          }
        }
      }

      let shipCopy = this.state.ship
      shipCopy.height++

      for(let i = 0; i < 20; i++){
        if(boardCopy[i][2] === 'black' && shipCopy.height === i){
          shipCopy.height = 10
          this.setState({ gameOver: true})
          clearInterval(this.scoreId)
        }
      }
      if(shipCopy.height < 0 || shipCopy.height > 19){
        shipCopy.height = 10
        this.setState({ gameOver: true })
        clearInterval(this.scoreId)

      }

      boardCopy[shipCopy.height][shipCopy.position] = 'white'


      this.setState({ board: boardCopy, ship: shipCopy, rocks: rocksCopy})
    }, 200)


    this.scoreId = setInterval( () => {
      let scoreCopy = ++this.state.score
      this.setState({ score: scoreCopy })
    }, 1000)
  }

  handleFlying = event => {
    if(this.state.gameOver){
      return
    }
    //for clicking
    let shipCopy = this.state.ship
    shipCopy.height-= 2
    this.setState({ ship: shipCopy })

    // console.log(event)
    // let shipCopy = this.state.ship
    // if(event.key == 'w'){
    //   shipCopy.height-= 1
    //   this.setState({ship: shipCopy})
    // }
    // else if(event.key == 's'){
    //   shipCopy.height+= 1
    //   this.setState({ship: shipCopy})
    // }
    // else if(event.key == 'd'){
    //   shipCopy.position++
    //   this.setState({ship: shipCopy})
    // }
    // else if(event.key == 'a'){
    //   shipCopy.position--
    //   this.setState({ship: shipCopy})
    // }
  }

  switchBack = () => {
    // this.setState({gameOver: false}
    let winnings = this.state.score * 5
    let tower = {...this.props.tower, resources: this.props.tower.resources + winnings}
    this.props.applyingRateTower(tower)
    this.props.switchGameMode()
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
          Resources Collected: {this.state.score * 5}
        </Header>
      </Grid.Column>
      <Grid.Column width={8}>
        <div id="space-travel" tabIndex="0" onClick={this.handleFlying}>
        <Board board={this.state.board}/>
        {this.state.gameOver ?
          <Button onClick={this.switchBack}>Return to Bunker</Button> : null
        }
        </div>
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
      width: 30,
      height: 30,
      backgroundColor: props.cell === "white" ? "brown" : props.cell,
      backgroundSize: '30px 30px',
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
