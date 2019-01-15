import React from 'react'
import {connect} from 'react-redux'
import {setCurrentShop} from '../redux/actions'

class Shop extends React.Component {

  showInfo = () => {
    this.props.setCurrentShop(this.props.shopObj)
  }

  assignPrice = () => {
    if(this.props.shopObj.shop_type === "Food"){
      this.props.shopObj.price = 99999
    }
    else if(this.props.shopObj.shop_type === "Housing"){
      this.props.shopObj.price = 11111
    }
    else if(this.props.shopObj.shop_type === "Entertainment"){
      this.props.shopObj.price = 33333
    }
    else if(this.props.shopObj.shop_type === "Service"){
      this.props.shopObj.price = 77777
    }
    else if(this.props.shopObj.shop_type === "Defense"){
      this.props.shopObj.price = 55555
    }
  }

  render(){
    return(
      <div onClick={this.showInfo}
        className="filled-shop">
        {this.props.shopObj.name.toUpperCase()}
        {this.assignPrice()}
      </div>
    )
  }
}

export default connect(null, {setCurrentShop})(Shop)
