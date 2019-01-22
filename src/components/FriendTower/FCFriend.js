import React from 'react'
import FloorFriend from './FloorFriend'

class FCFriend extends React.Component {

  render(){
    return(
      <div className='floor-container'>
        <FloorFriend floor={this.props.floor}/>
      </div>
    )
  }
}

export default FCFriend
