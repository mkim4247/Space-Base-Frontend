import React from 'react'

import Shop from './Shop'

class ShopContainer extends React.Component {

  createShop = () => {
    console.log('Shop Made')
  }

  render(){
    return(
      <div id='shop-container' onClick={this.createShop}>
        ShopContainer
        {this.props.shops?
          this.props.shops.map( shop => {
          return <Shop />
        }) : null }
      </div>
    )
  }
}

export default ShopContainer
