import React from 'react'
import { Grid } from 'semantic-ui-react'
import TCFriend from './TCFriend'
import TSFriend from './TSFriend'
import StatsFriend from './StatsFriend'

class GCFriend extends React.Component {
  render(){
    return(
      <div>
          <div id='game-container'>
            <Grid>
              <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <StatsFriend tower={this.props.tower}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <TCFriend tower={this.props.tower}/>
            </Grid.Column>
            <Grid.Column width={4}>
              <TSFriend tower={this.props.tower}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </div>
    )
  }
}

export default GCFriend
