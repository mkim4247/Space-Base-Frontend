import React from 'react'
import ShopContainer from './ShopContainer'

const Floor = props => {
  return(
    <div className='floor' >
      <ShopContainer shopsArr={props.floor.shops}/>
    </div>
  )
}

export default Floor
