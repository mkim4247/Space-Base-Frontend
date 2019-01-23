import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrentUser } from '../redux/actions'
import { Menu, Modal, Icon } from 'semantic-ui-react'

class Nav extends React.Component {

  logout = () => {
    this.props.setCurrentUser(null)
    localStorage.clear()
  }

  render() {
    return (
      <div id='nav'>
        <Menu size='huge' inverted>
          <Menu.Menu position='left'>
            <Menu.Item
              as={NavLink}
              to='/users'>
              <Icon name='rocket'/>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
                as={NavLink}
                to='/'>
              <Icon name='home'/>
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to='/about' >
              <Icon name='question circle outline'/>
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to='/edit'>
              <Icon name='edit'/>
            </Menu.Item>
            {this.props.currentUser ?
              <Menu.Item
                onClick={this.logout}>
                <Icon name='log out'/>
              </Menu.Item>
              :
                <Menu.Item
                  as={NavLink}
                  name="Login"
                  to='/login' />
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

export default connect(mapStateToProps, { setCurrentUser })(Nav)
