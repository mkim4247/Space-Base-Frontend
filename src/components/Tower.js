import React from 'react'
import { connect } from 'react-redux'

import {Header, Grid} from 'semantic-ui-react'

import FloorContainer from './FloorContainer'


class Tower extends React.Component {

  render(){
    return(
      <div id='tower'>
        <Header size='medium'>{this.props.tower.name}</Header>
        {this.props.floors.map( floor => <FloorContainer key={floor.id} shops={floor.shops}/>)}
        <FloorContainer level={this.props.floors.length + 1} shops={[]}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tower: state.tower,
    floors: state.floors
  }
}

export default connect(mapStateToProps)(Tower)
