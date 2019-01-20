import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class UserProfile extends React.Component {

  render(){
    console.log(this.props.user)
    return(
      <div> {this.props.user ? this.props.user.username : null} </div>
    )
  }

}

const mapStateToProps = (state, routerProps) => {
  return { user: state.allUsers.find(user => user.username === routerProps.match.params.username) }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
