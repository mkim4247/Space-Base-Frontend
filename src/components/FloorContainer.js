import React from 'react'

import Floor from './Floor'
class FloorContainer extends React.Component {

  render(){
    return(
      <div className='floor-container'>
        <Floor floor={this.props.floor}/>
      </div>
    )
  }
}

export default FloorContainer
