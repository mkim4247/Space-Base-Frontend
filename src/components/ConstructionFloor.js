import React from 'react'

import {connect} from 'react-redux'
import { addingFloor, updatingTowerFloors } from '../redux/actions'

class ConstructionFloor extends React.Component {

  addFloorClick = () => {
    if(this.props.tower.funds < 1000){
      alert("Insufficient funds!")
    } else {
      let floor = {
        level: this.props.level,
        tower_id: this.props.tower.id
      }
      floor.price = 1000
      this.props.addingFloor(floor)
      this.props.updatingTowerFloors(floor)
    }
  }

  render(){
    return(
      <div id='construction-floor' className='floor-container' onClick={this.addFloorClick} style={{backgroundColor: 'yellow'
        }}>
        <h3>Build New Floor</h3>
        <h4>Price: 1000</h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower }
}


export default connect(mapStateToProps, {addingFloor, updatingTowerFloors})(ConstructionFloor)
