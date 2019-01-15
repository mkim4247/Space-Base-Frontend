import React from 'react'
import {connect} from 'react-redux'
import {destroyingShop, updatingTowerShops} from '../redux/actions'

import {Header, Button, Segment} from 'semantic-ui-react'

class ShowInfo extends React.Component {

  destroyShop = () => {
    this.props.destroyingShop(this.props.shop)
    this.props.updatingTowerShops(this.props.shop)
  }

  assignPrice = () => {
    if(this.props.shop.shop_type === "Food"){
      this.props.shop.price = -25
    }
    else if(this.props.shop.shop_type === "Housing"){
      this.props.shop.price = -20
    }
    else if(this.props.shop.shop_type === "Recreation"){
      this.props.shop.price = -30
    }
    else if(this.props.shop.shop_type === "Service"){
      this.props.shop.price = -30
    }
    else if(this.props.shop.shop_type === "Defense"){
      this.props.shop.price = -50
    }
  }

  render(){
    return(
      <div id='show-info'>
        {this.assignPrice()}
        <Segment inverted>
        <Header size="large">Shop Info</Header>
        <Header size='medium'>{this.props.shop.shop_type}</Header>
        <Header size='medium'>Sell Value: {-1 * this.props.shop.price}</Header>
        <Button onClick={this.destroyShop} size='large'inverted color='blue'> Sell Shop </Button>
        </Segment>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    shop: state.currentShop
  }
}

export default connect(mapStateToProps, {destroyingShop, updatingTowerShops})(ShowInfo)
