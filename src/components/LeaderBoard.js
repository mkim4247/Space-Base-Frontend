import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Header, Segment, List } from 'semantic-ui-react'

import Nav from './Nav'
import UserProfile from './UserProfile'

class LeaderBoard extends React.Component {

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
      <div id='leaderboard'>
        <Nav/>
        <div className='home-header'>
          SPACE BASE
        </div>
        <Segment inverted size='huge' align='center' raised>
        <Header size='huge' align='center'>
          LEADERBOARD
        </Header>
        <Header size='medium'>
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
        <Header size='medium'>
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
    users: state.allUsers.slice(0, 10)
  }
}

export default connect(mapStateToProps)(LeaderBoard)
