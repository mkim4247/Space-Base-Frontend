import React from 'react'
import { connect } from 'react-redux'
import walk1 from '../images/Alien_sprites/alienBlue_walk1.png'
import walk2 from '../images/Alien_sprites/alienBlue_walk2.png'


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

// <img src={walk2} className='aliens' />
// <img src={walk1} className='aliens'/>
