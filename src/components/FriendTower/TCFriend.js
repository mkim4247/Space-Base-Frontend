import React from 'react'
import TowerFriend from './TowerFriend'

class TCFriend extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id='tower-container'>
        <TowerFriend tower={this.props.tower}/>
      </div>
    )
  }

}

export default TCFriend
