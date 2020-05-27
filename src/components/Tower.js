import React from 'react'
import { connect } from 'react-redux'
import FloorContainer from './FloorContainer'
import ConstructionFloor from './ConstructionFloor'
import Lobby from './Lobby'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Tower = props => {
  return(
    <div id='tower'>
      <Lobby />
        {props.floors.map( floor => (
          <FloorContainer
            key={floor.id}
            floor={floor}/>
        ))}
      <ConstructionFloor
        level={props.floors.length + 1}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tower: state.tower,
    floors: state.floors
  }
}

export default connect(mapStateToProps)(Tower)
