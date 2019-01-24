import React from 'react'
import { connect } from 'react-redux'

class Lobby extends React.Component {

  //////ADD SHOP INFO on CLICK HERE
  showTowerInfo = () => {
    console.log("hi")
  }

  render(){
    return(
      <div
        id="lobby"
        className='floor-container'
        style={{backgroundColor: 'white'}}
        onClick={this.showTowerInfo}>

      </div>
    )
  }
}


export default connect(null)(Lobby)
