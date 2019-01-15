import React from 'react'
import {connect} from 'react-redux'
import {destroyingShop} from '../redux/actions'

class ShowInfo extends React.Component {

  destroyShop = () => {
    this.props.destroyingShop(this.props.shop)
  }

  render(){
    console.log(this.props.shop)
    return(
      <div id='show-info'>
        <h2>Shop Info</h2>
        <h4>{this.props.shop.name.toUpperCase()}</h4>
        <h4>{this.props.shop.price}</h4>
        <button onClick={this.destroyShop}> Destroy Shop </button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    shop: state.currentShop
  }
}

export default connect(mapStateToProps, {destroyingShop})(ShowInfo)
