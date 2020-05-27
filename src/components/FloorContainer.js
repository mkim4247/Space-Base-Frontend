import React from 'react'
import Floor from './Floor'

const FloorContainer = props => {
  return(
    <div className='floor-container'>
      <Floor floor={props.floor}/>
    </div>
  )
}

export default FloorContainer
