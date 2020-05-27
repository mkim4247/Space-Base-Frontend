import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { readRules } from '../redux/actions'

class About extends React.Component {
  return(
    <div>
      <Nav />
        <div id='about'>
            <Container
              style={{
                fontFamily: 'VT323, monospace',
                fontSize: '30px',
                padding: '1vh',
                border: '5px rgb(193, 144, 212) solid'}}>
            <h1
              style={{
                fontFamily: 'VT323, monospace',
                fontSize: '10vh',
                padding: '30px',
                color: 'rgb(193, 144, 212)'}}>
              Welcome to Space Base!
            </h1>
            <p>
              You've been placed in charge of overseeing the construction of our new Space Base. Mission Command will be closely monitoring your performance.
            </p>
            <p>
              Over time, you'll receive extra resources based on how big your base becomes, and depending on how smoothly things are running, more people will be sent to join your base.
            </p>

            <p>
              If you need resources asap, you can scout the area as well. The only ship you have is manually powered though, so you'll need to maintain its flight by clicking your mouse.
            </p>

            <p style={{
                textDecoration: 'underline',
                color: 'rgb(193, 144, 212)'}}>
              Some things to keep in mind:
            </p>

            <p>
              - For every 5 people, you'll need 1 Food Unit and 1 Housing Unit to keep your base happy
            </p>
            <p>
              - Your base population will only increase if the happiness is high enough
            </p>
            <p>
              - There are reports of unfriendly characters in the area; make sure you have enough defense to match your population
            </p>
            <p>
              - Lastly, be prepared for anything, you never know what random events will occur
            </p>

            <Link to='/'>
              <Button
                inverted
                color='purple'
                onClick={this.props.readRules}>
                GOOD LUCK!
              </Button>
            </Link>
          </Container>
        </div>
    </div>
  )
}

export default connect(null, { readRules })(About)
