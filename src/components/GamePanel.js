import React from 'react'
import { connect } from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'
import { switchGameMode } from '../redux/actions'

class GamePanel extends React.Component {
  switchModes = event => {
    this.props.switchGameMode()
  }

  render(){
    return(
      <Segment inverted>
        <Button
          inverted
          size='large'
          onClick={this.switchModes}>
            Explore!
        </Button>
      </Segment>
    )
  }
}

export default connect(null, { switchGameMode })(GamePanel)
