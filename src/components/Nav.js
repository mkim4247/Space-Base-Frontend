import React from 'react'

import {connect} from 'react-redux'
import { setCurrentUser } from '../redux/actions'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends React.Component {

  logout = () => {
    this.props.setCurrentUser(null)
    localStorage.clear()
  }

  render() {
    return (
      <div id='nav'>
      <Menu size='huge'>
      <Menu.Menu position='right'>
        {this.props.currentUser ?
          <Menu.Item name="Logout" onClick={this.logout}/> :
          <Menu.Item as={NavLink} name="Login" to='/login' />
        }
      </Menu.Menu>
      </Menu>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps, {setCurrentUser})(Nav)
