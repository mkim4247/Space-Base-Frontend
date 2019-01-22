import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Header } from 'semantic-ui-react'
import Nav from './Nav'
import GCFriend from './FriendTower/GCFriend'

class UserProfile extends React.Component {

  render(){
    console.log(this.props.user)
    return(
      <div>

        {this.props.user ?


            <div>
              <Nav />
              <div id='home'>
                <Header inverted size='huge' align='center'>
                  Space Base
                </Header>
                <GCFriend tower={this.props.user.tower}/>
              </div>
            </div>

           :
           <div>
             User not found
           </div>
         }

      </div>
    )
  }

}

const mapStateToProps = (state, routerProps) => {
  return { user: state.allUsers.find(user => user.username === routerProps.match.params.username) }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
