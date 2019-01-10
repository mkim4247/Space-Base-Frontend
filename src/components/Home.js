import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Nav from './Nav'
import GameContainer from './GameContainer'
import { settingUserTower } from '../redux/actions'

class Home extends React.Component {

  componentDidMount(){
      this.props.settingUserTower()
  }

  render(){
    return(
      <div>
        <Nav />
        <Header size='huge' align='center'> Welcome  </Header>

        <GameContainer />


      </div>
    )
  }

}


export default connect(null, {settingUserTower})(Home)
