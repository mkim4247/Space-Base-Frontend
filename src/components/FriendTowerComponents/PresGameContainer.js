import React from 'react'
import { Grid } from 'semantic-ui-react'
import PresTowerContainer from './PresTowerContainer'
import PresTowerStats from './PresTowerStats'
import PresStats from './PresStats'

const PresGameContainer = props => {
  return(
    <div>
      <div id='game-container'>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <PresStats tower={props.tower}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <PresTowerContainer tower={props.tower}/>
            </Grid.Column>
            <Grid.Column width={4}>
              <PresTowerStats tower={props.tower}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

export default PresGameContainer
