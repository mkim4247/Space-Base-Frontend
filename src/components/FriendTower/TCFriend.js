import React from 'react'
import TowerFriend from './TowerFriend'

class TCFriend extends React.Component {

  render(){
    return(
      <div id='tower-container'>
        <TowerFriend tower={this.props.tower}/>
      </div>
    )
  }

}

export default TCFriend
