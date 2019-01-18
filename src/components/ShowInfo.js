import React from 'react'
import { connect } from 'react-redux'
import { destroyingShop, updatingTowerShops } from '../redux/actions'
import { Header, Button, Segment } from 'semantic-ui-react'

class ShowInfo extends React.Component {
  destroyShop = () => {
    this.props.destroyingShop(this.props.shop)
    this.props.updatingTowerShops(this.props.shop)
  }

  assignInfo = () => {
    if(this.props.shop.shop_type === "Food"){
      this.props.shop.price = 25
      this.props.shop.info = "5 Food Provided"
    }
    else if(this.props.shop.shop_type === "Housing"){
      this.props.shop.price = 20
      this.props.shop.info = "5 Rooms Provided"
    }
    // else if(this.props.shop.shop_type === "Recreation"){
    //   this.props.shop.price = 30
    //   this.props.shop.info = "5 Rec Provided"
    // }
    else if(this.props.shop.shop_type === "Service"){
      this.props.shop.price = 30
      // this.props.shop.info = "5 Services Provided"
    }
    else if(this.props.shop.shop_type === "Defense"){
      this.props.shop.price = 50
      this.props.shop.info = "10 Defense Provided"
    }
  }

  render(){
    return(
      <div id='show-info'>
        {this.assignInfo()}
        <Segment inverted>
          <Header size="large"> Info </Header>
          <Header size='medium'> {this.props.shop.shop_type} </Header>
          <Header size='medium'> {this.props.shop.info} </Header>
          <Header size='medium'> Sell Value: {this.props.shop.price} </Header>
          <Button
            onClick={this.destroyShop}
            size='large'
            inverted
            color='red'>
              Sell Shop
          </Button>
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

export default connect(mapStateToProps, { destroyingShop, updatingTowerShops })(ShowInfo)
