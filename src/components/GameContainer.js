import React from 'react'

import TowerContainer from './TowerContainer'
import BuildMenu from './BuildMenu'
import Stats from './Stats'
import {Grid} from 'semantic-ui-react'

class GameContainer extends React.Component {

  render(){
    return(
      <div id='game-container'>
        GameContainer
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Stats />
              </Grid.Column>
              <Grid.Column width={9}>
                <TowerContainer />
              </Grid.Column>
              <Grid.Column width={3}>
                <BuildMenu />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}

export default GameContainer
