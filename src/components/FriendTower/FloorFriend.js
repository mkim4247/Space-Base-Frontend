import React from 'react'
import SCFriend from './SCFriend'

class FloorFriend extends React.Component {

  render(){
    return(
      <div className='floor' >
        <SCFriend shopsArr={this.props.floor.shops}/>
      </div>
    )
  }
}

export default FloorFriend
