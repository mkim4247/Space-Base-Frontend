import React from 'react'

import {connect} from 'react-redux'
import { addingFloor } from '../redux/actions'

class ConstructionFloor extends React.Component {

  addFloorClick = () => {
    this.props.addingFloor({
      level: this.props.level,
      tower_id: this.props.tower.id
    })
  }

  render(){
    return(
      <div id='construction-floor' className='floor-container' onClick={this.addFloorClick} style={{backgroundColor: 'white'
        }}>
        CONSTRUCTION
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { tower: state.tower }
}


export default connect(mapStateToProps, {addingFloor})(ConstructionFloor)
