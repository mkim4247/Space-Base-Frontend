import React from 'react'

import walk1 from '../images/Alien_sprites/alienBlue_walk1.png'
import walk2 from '../images/Alien_sprites/alienBlue_walk2.png'


class Lobby extends React.Component {

  render(){
    return(
      <div id="lobby" className='floor-container' style={{backgroundColor: 'white'}}>
      </div>
    )
  }
}

export default Lobby

// <img src={walk2} className='aliens' />
// <img src={walk1} className='aliens'/>
