import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Segment, List, Grid } from 'semantic-ui-react'
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

  topPopulation = () => {
    return this.props.users.sort( (a,b) => {
      return b.tower.population - a.tower.population
    })
  }

  render(){
    let resources = this.topResources().slice(0, 5)
    let floors = this.topFloors().slice(0, 5)
    let population = this.topPopulation().slice(0, 5)
    return(
      <div id='leaderboard' >
        <Nav/>
        <div className='home-header'>
          SPACE BASE
        </div>
        <Segment inverted size='huge' align='center'
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/41952/neil-armstrong-armstrong-astronaut-space-suit-41952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
            backgroundSize: '2200px 2000px',
            height: '100vh'
            }}>
          <h1 style={{fontFamily: 'VT323, monospace', fontSize: '100px', textDecoration: 'underline'}}> LEADERBOARD </h1>
          <br/>
          <br/>
          <Grid celled>
            <Grid.Row columns={3}>
              <Grid.Column>

        <h2 style={{textDecoration: 'underline', color: 'white', fontFamily: 'VT323, monospace', fontSize: '80px'}}>
          MOST RESOURCES
        </h2>
        <List size='medium'>
        {resources.map( (user, index) => (
          <List.Item
            key={user.id}
            as={NavLink}
            to={`/users/${user.username}`}>
            <h3 style={{color: 'rgb(64, 197, 222)', fontFamily: 'VT323, monospace', fontSize: '60px'}}> {index + 1}. {user.username.toUpperCase()}
            </h3>
            <p style={{color: 'rgb(64, 197, 222)', fontFamily: 'VT323, monospace', fontSize: '50px'}}> Resources: {user.tower.resources} </p>
          </List.Item>

        ))}
        </List>
          </Grid.Column>

          <Grid.Column>
          <h2 style={{textDecoration: 'underline', color: 'white', fontFamily: 'VT323, monospace', fontSize: '80px'}}>
          LARGEST POPULATION
          </h2>
          <List size='medium'>
          {population.map( (user, index) => (
          <List.Item
          key={user.id}
          as={NavLink}
          to={`/users/${user.username}`}>
          <h3 style={{color: 'rgb(64, 197, 222)', fontFamily: 'VT323, monospace', fontSize: '60px'}}> {index + 1}. {user.username.toUpperCase()}
          </h3>
          <p style={{color: 'rgb(64, 197, 222)', fontFamily: 'VT323, monospace', fontSize: '50px'}}> Population: {user.tower.population} </p>
          </List.Item>

          ))}
          </List>
          </Grid.Column>


          <Grid.Column>

        <h2 style={{textDecoration: 'underline', color: 'white', fontFamily: 'VT323, monospace', fontSize: '80px'}}>
          BIGGEST BASE
        </h2>
        <List size='small'>
        {floors.map( (user, index) => (
          <List.Item
            key={user.id}
            as={NavLink}
            to={`/users/${user.username}`}>
            <h3 style={{color: 'rgb(64, 197, 222)', fontFamily: 'VT323, monospace', fontSize: '60px'}}>
              {index + 1}. {user.username.toUpperCase()} </h3>
            <p style={{color: 'rgb(64, 197, 222)', fontFamily: 'VT323, monospace', fontSize: '50px'}}> Floors: {user.tower.floors.length} </p>
          </List.Item>
        ))}
        </List>

        </Grid.Column>
        </Grid.Row>
        </Grid>
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
