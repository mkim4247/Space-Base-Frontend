import React from 'react'
import { connect } from 'react-redux'

class Stats extends React.Component {

  render(){
    return(
      <div id="stats">
        <div> Funds: {this.props.tower.funds} </div>
        <div> Happiness: {this.props.tower.happiness} </div>
        <div> Population: {this.props.tower.population} </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower }
}

export default connect(mapStateToProps)(Stats)
