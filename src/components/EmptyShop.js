import React from 'react'
import { connect } from 'react-redux'
import { setCurrentShop } from '../redux/actions'

const EmptyShop = props => {
  const buildShop = () => {
    props.setCurrentShop(props.shopObj)
  }

  return(
    <div className='empty-shop' onClick={this.buildShop}>
      EMPTY
    </div>
  )
}

export default connect(null, { setCurrentShop })(EmptyShop)
