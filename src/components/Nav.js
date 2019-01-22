import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrentUser } from '../redux/actions'
import { Menu, Modal } from 'semantic-ui-react'

class Nav extends React.Component {

  logout = () => {
    this.props.setCurrentUser(null)
    localStorage.clear()
  }

  render() {
    return (
      <div id='nav'>
        <Menu size='huge' inverted>
          <Menu.Menu position='right'>
            <Menu.Item
                name="Home"
                as={NavLink}
                to='/' />
            <Menu.Item
                name="About"
                as={NavLink}
                to='/about' />
            {this.props.currentUser ?
              <Menu.Item
                name="Logout"
                onClick={this.logout}/>
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
