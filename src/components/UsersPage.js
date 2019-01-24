import React from 'react'
import LeaderBoard from './LeaderBoard'

class UsersPage extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div id='users-page'>
      <LeaderBoard />
      </div>
    )
  }

}


export default UsersPage
