import React from 'react'
import { connect } from 'react-redux'
import { switchStatMenu } from '../redux/actions'
import { Segment, Header, Statistic, Progress, Button } from 'semantic-ui-react'

class Stats extends React.Component {
  switchMenu = event => {
    this.props.switchStatMenu()
  }

  render(){
    return(
      <div id="stats">
        <Segment inverted align='center'>
          <Header size='medium'>
            BASE STATS:
          </Header>
          <hr/>
          <Statistic.Group horizontal size={'small'}>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.tower.resources}
              </Statistic.Value>
              <Statistic.Label>
                Resources
              </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.tower.population}
              </Statistic.Value>
              <Statistic.Label>
                Population
              </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.tower.defense}
              </Statistic.Value>
              <Statistic.Label>
                Defense
               </Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <Progress
            percent={this.props.tower.happiness}
            inverted
            progress
            color={ this.props.tower.happiness > 85 ? 'green' : this.props.tower.happiness < 50 ? 'red' : 'yellow'}>
            HAPPINESS
          </Progress>
          <Button onClick={this.switchMenu}>
            VIEW ADV. STATS
          </Button>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tower: state.tower
  }
}

export default connect(mapStateToProps, { switchStatMenu })(Stats)
