import React from 'react'
import ShopContainer from './ShopContainer'

class Floor extends React.Component {
  render(){
    return(
      <div className='floor' >
        <ShopContainer shopsArr={this.props.floor.shops}/>
      </div>
    )
  }
}

export default Floor
