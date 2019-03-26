import React from 'react'
import { Segment, Header, Statistic, Progress } from 'semantic-ui-react'

const PresStats = props => {
  return(
    <div id="stats">
      <Segment inverted align='center'>
        <Header size='huge'>
          BASE STATS:
        </Header>
        <hr/>
        <Statistic.Group horizontal size='small'>
          <Statistic inverted>
            <Statistic.Value>
              {props.tower.resources}
            </Statistic.Value>
            <Statistic.Label>
              Resources
            </Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>
              {props.tower.population}
            </Statistic.Value>
            <Statistic.Label>
              Population
            </Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>
              {props.tower.defense}
            </Statistic.Value>
            <Statistic.Label>
              Defense
            </Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>
              {props.tower.happiness}
            </Statistic.Value>
            <Statistic.Label>
              Happiness
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Progress
          percent={props.tower.happiness}
          inverted
          progress
          color={props.tower.happiness > 85 ? 'green' : props.tower.happiness < 50 ? 'red' : 'yellow'}/>
      </Segment>
    </div>
  )
}

export default PresStats
