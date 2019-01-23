import React from 'react'
import { connect } from 'react-redux'
import { settingAllUsers } from '../redux/actions'
import Nav from './Nav'
import LeaderBoard from './LeaderBoard'
import UserProfile from './UserProfile'
import { Header } from 'semantic-ui-react'

class UsersPage extends React.Component{
  componentDidMount(){
    this.props.settingAllUsers()
  }


  render(){
    console.log(this.props)
    return(
      <div id='users-page'>
      <LeaderBoard />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    users: state.allUsers
  }
}

export default connect(mapStateToProps,{settingAllUsers})(UsersPage)
