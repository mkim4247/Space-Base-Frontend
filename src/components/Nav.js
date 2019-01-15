import React from 'react'

import {connect} from 'react-redux'
import { setCurrentUser } from '../redux/actions'

import { Menu } from 'semantic-ui-react'

class Nav extends React.Component {

  logout = () => {
    this.props.setCurrentUser(null)
    localStorage.clear()
  }

  render() {
    return (
      <div id='nav'>
      <Menu pointing secondary>
      <Menu.Menu position='right'>
        <Menu.Item name="Logout" onClick={this.logout}/>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }

}

export default connect(null, {setCurrentUser})(Nav)
