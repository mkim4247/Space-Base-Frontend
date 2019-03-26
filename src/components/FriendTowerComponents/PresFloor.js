import React from 'react'
import PresShopContainer from './PresShopContainer'

const PresFloor = props => {
  return(
    <div className='floor' >
      <PresShopContainer shopsArr={props.floor.shops}/>
    </div>
  )
}

export default PresFloor
