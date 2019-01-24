import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Header, Segment, List } from 'semantic-ui-react'
import Nav from './Nav'
import { settingAllUsers } from '../redux/actions'

class LeaderBoard extends React.Component {
  componentDidMount(){
    this.props.settingAllUsers()
  }

  topResources = () => {
    return this.props.users.sort( (a,b) => {
      return b.tower.resources - a.tower.resources
    })
  }

  topFloors = () => {
    return this.props.users.sort( (a,b) => {
      return b.tower.floors.length - a.tower.floors.length
    })
  }

  render(){
    let resources = this.topResources().slice(0, 5)
    let floors = this.topFloors().slice(0, 5)
    console.log(floors)
    return(
      <div id='leaderboard' >
        <Nav/>
        <div className='home-header'>
          SPACE BASE
        </div>
        <Segment inverted size='huge' align='center'>
          <div style={{fontFamily: 'VT323, monospace', fontSize: '100px', textDecoration: 'underline'}}> LEADERBOARD </div>
        <Header size='medium' style={{textDecoration: 'underline'}}>
          MOST RESOURCES
        </Header>
        <List size='medium'>
        {resources.map( (user, index) => (
          <List.Item
            key={user.id}
            as={NavLink}
            to={`/users/${user.username}`}>
            <Header color='blue' size='medium'> {index + 1}. {user.username.toUpperCase()}
            </Header>
            <p>Resources: {user.tower.resources} </p>
          </List.Item>

        ))}
        </List>
        <Header size='medium' style={{textDecoration: 'underline'}}>
          BIGGEST BASE
        </Header>
        <List size='medium'>
        {floors.map( (user, index) => (
          <List.Item
            key={user.id}
            as={NavLink}
            to={`/users/${user.username}`}>
            <Header color='blue' size='medium'>
              {index + 1}. {user.username.toUpperCase()} </Header>
            <p> Floors: {user.tower.floors.length} </p>
          </List.Item>
        ))}
        </List>
        </Segment>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    users: state.allUsers
  }
}

export default connect(mapStateToProps, { settingAllUsers })(LeaderBoard)
