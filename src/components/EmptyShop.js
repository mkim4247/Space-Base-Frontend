import React from 'react'
import {connect} from 'react-redux'
//
import {addingShop} from '../redux/actions'

class EmptyShop extends React.Component {

  buildShop = () => {
    console.log("BUILDING")
    let shop = {
      type: "Food", name: "Foooooood", id: this.props.id, floor_id: this.props.floor
    }
    this.props.addingShop(shop)
  }

  render(){
    return(
      <div className='empty-shop' onClick={this.buildShop}>
        EMPTY
      </div>
    )
  }
}

export default connect(null, {addingShop})(EmptyShop)
