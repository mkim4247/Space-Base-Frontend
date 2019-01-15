import React from 'react'
import { connect } from 'react-redux'
import {Segment, Header} from 'semantic-ui-react'

class Stats extends React.Component {

  render(){
    return(
      <div id="stats">
        <Segment inverted>
        <Header size='large'>Stats:</Header>
        <Header size='medium'> Funds: {this.props.tower.funds}
        </Header>
        <Header size='medium'> Happiness: {this.props.tower.happiness} </Header>
        <Header size='medium'> Population: {this.props.tower.population} </Header>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower }
}

export default connect(mapStateToProps)(Stats)
