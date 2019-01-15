import React from 'react'
import {connect} from 'react-redux'

import {setCurrentShop} from '../redux/actions'

class EmptyShop extends React.Component {

  buildShop = () => {
    this.props.setCurrentShop(this.props.shopObj)
  }

  render(){
    return(
      <div className='empty-shop' onClick={this.buildShop}>
        EMPTY
      </div>
    )
  }
}


export default connect(null, {setCurrentShop})(EmptyShop)
