import React from 'react'

class SpaceTravel extends React.Component {
  constructor(props){
    super(props)

    let board = []

    for(let i = 0; i<20; i++){
      board.push(new Array(30).fill('blue'))
    }

    let ship = {
      height: 10,
      position: 2
    }

    let blocks = [
      {position:3, height:5, upright: false},
      {position:5, height:8, upright: true},
      {position:7, height:6, upright: false},
      {position:10, height:7, upright: false},
      {position:20, height:8, upright: true},
      {position:13, height:3, upright: false},
      {position:17, height:2, upright: false},
      {position:29, height:9, upright: true},
      {position:24, height:4, upright: false},
    ]

    board[ship.height][ship.position] = 'yellow'

    this.state = {
      board: board,
      ship: ship,
      blocks: blocks,
      crashed: false
    }

    this.timerID = setInterval(() => {
      if(this.state.crashed){
        return
      }
      let boardCopy = []

      let blocksCopy = this.state.blocks.slice()

      for(let i = 0; i<20; i++){
        boardCopy.push(new Array(30).fill('blue'))
      }

      for(let i = 0; i < blocksCopy.length; i++){
        blocksCopy[i].position--
        if(blocksCopy[i].position < 0){
          blocksCopy[i].position = 29
          blocksCopy[i].height = Math.floor(Math.random()*8) + 3
        }
      }

      for(let i = 0; i < blocksCopy.length; i++){
        for(let j = 0; j < blocksCopy[i].height; j++){
          if(blocksCopy[i].upright){
            boardCopy[19-j][blocksCopy[i].position] = 'black'
          }
          else {
            boardCopy[j][blocksCopy[i].position] = 'black'
          }
        }
      }

      let shipCopy = this.state.ship

      let crashed = false
      if(shipCopy.height > 19 || shipCopy.height < 0){
        shipCopy.height = 10
        crashed = true
      }

      for(let i = 0; i < 20; i++){
        if(boardCopy[i][2] === 'black' && shipCopy.height === i){
          shipCopy.height = 10
          crashed = true
        }
      }

      if(crashed){
        this.setState({crashed: true})
      }

      boardCopy[shipCopy.height][shipCopy.position] = 'yellow'
      this.setState({ board: boardCopy, ship: shipCopy, blocks: blocksCopy})
    }, 50)
  }

  handleFlying = event => {
    if(this.state.crashed){
      return
    }
    console.log(event)
    let shipCopy = this.state.ship
    if(event.key == 'w'){
      shipCopy.height-= 1
      this.setState({ship: shipCopy})
    }
    else if(event.key == 's'){
      shipCopy.height+= 1
      this.setState({ship: shipCopy})
    }
    else if(event.key == 'd'){
      shipCopy.position++
      this.setState({ship: shipCopy})
    }
    else if(event.key == 'a'){
      shipCopy.position--
      this.setState({ship: shipCopy})
    }
  }

  restart = () => {
    this.setState({crashed: false})
  }

  render(){
    return (
      <div tabIndex="0" onKeyPress={this.handleFlying}>
      <Board board={this.state.board}/>
      {this.state.crashed ?
        <button onClick={this.restart}>Restart</button> : null
      }
      </div>
    )
  }

}

export default SpaceTravel


////////////
function BoardCell(props){
  let style = {
    width: 20,
    height: 20,
    backgroundColor: props.cell
  }
  return (
    <div style={style}></div>
  )
}

function BoardRow(props){
  let style = {
    display: 'flex'
  }
  return(
    <div style={style}>
      {props.row.map( cell => {
        return <BoardCell cell={cell}/>
      })}
    </div>
  )
}

function Board(props){
  return (
    <div>
    {props.board.map( row => {
      return <BoardRow row={row}/>
    })}
    </div>
  )
}
