import React from 'react'

import Floor from './Floor'
import {connect} from 'react-redux'
import { addingFloor } from '../redux/actions'

class FloorContainer extends React.Component {

  addFloorClick = () => {
    this.props.addingFloor({
      level: this.props.level,
      tower_id: this.props.tower.id
    })
  }

  render(){
    return(
      <div id='floor-container' onClick={
            this.props.level ?
            this.addFloorClick :
            null
            }
            >
        <Floor shops={this.props.shops}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower }
}


export default connect(mapStateToProps, {addingFloor})(FloorContainer)
