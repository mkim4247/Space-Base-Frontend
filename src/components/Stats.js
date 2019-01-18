import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Statistic } from 'semantic-ui-react'

class Stats extends React.Component {
  render(){
    return(
      <div id="stats">
        <Segment inverted>
          <Header size='huge'>Stats:</Header>
            <hr/>
          <Statistic.Group horizontal size='small'>
            <Statistic inverted>
              <Statistic.Value>  {this.props.tower.resources}  </Statistic.Value>
              <Statistic.Label> Resources </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>  {this.props.tower.population}  </Statistic.Value>
              <Statistic.Label> Population </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>  {this.props.tower.happiness}  </Statistic.Value>
              <Statistic.Label> Happiness </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>  {this.props.tower.defense}  </Statistic.Value>
              <Statistic.Label> Defense </Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower }
}

export default connect(mapStateToProps)(Stats)
