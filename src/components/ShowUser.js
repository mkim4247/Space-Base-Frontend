import React from 'react'
import { connect } from 'react-redux'

class ShowUser extends React.Component {
  render(){
    console.log(this.props)
    return(
      <div> Hi </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find( user => {
      return user.username === ownProps.match.params.username
    })
  }
}

export default connect(mapStateToProps)(ShowUser)
