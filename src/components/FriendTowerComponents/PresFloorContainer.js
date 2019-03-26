import React from 'react'
import PresFloor from './PresFloor'

const PresFloorContainer = props => {
  return(
    <div className='floor-container'>
      <PresFloor floor={props.floor}/>
    </div>
  )
}

export default PresFloorContainer
