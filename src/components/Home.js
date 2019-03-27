import React from 'react'
import { connect } from 'react-redux'
import { settingUserTower, settingAllUsers } from '../redux/actions'
import Nav from './Nav'
import GameContainer from './GameContainer'
import { Redirect } from 'react-router'

class Home extends React.Component {
  componentDidMount(){
    this.props.settingUserTower()
  }

  render(){
    return(
      this.props.newGame ?
        <Redirect to='/about'/>
        :
        <div>
          <Nav />
          <div id='home'>
            <div className='home-header'>
              SPACE BASE
            </div>
            <GameContainer />
          </div>
        </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    newGame: state.newGame
  }
}


export default connect(mapStateToProps, { settingUserTower, settingAllUsers })(Home)
