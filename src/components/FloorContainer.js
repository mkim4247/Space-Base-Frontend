import React from 'react'

import Floor from './Floor'
import {connect} from 'react-redux'
import { addingFloor } from '../redux/actions'
class FloorContainer extends React.Component {

  render(){
    return(
      <div className='floor-container'>
        <Floor shops={this.props.shops}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower }
}


export default connect(mapStateToProps, {addingFloor})(FloorContainer)
