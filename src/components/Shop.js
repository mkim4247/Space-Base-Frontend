import React from 'react'
import {connect} from 'react-redux'
import {setCurrentShop} from '../redux/actions'

class Shop extends React.Component {

  showInfo = () => {
    this.props.setCurrentShop(this.props.shopObj)
  }

  setBackground = () => {
    switch(this.props.shopObj.shop_type){
      case "Housing":
       return {backgroundImage: 'url(https://i.imgur.com/z3ao9Dg.png)', backgroundSize: '235px 90px', border: '5px solid blue'}
      case "Defense":
        return {backgroundImage: 'url(https://i.imgur.com/nAMGg3m.png)', backgroundSize: '235px 90px', border: '5px solid red'}
      case "Food":
        return {backgroundImage: 'url(https://i.imgur.com/8BRc717.png)', backgroundSize: '235px 90px', border: '5px solid green'}
    }
  }

  render(){
    return(
      <div onClick={this.showInfo}
        className="filled-shop" style={this.setBackground()}>
        {this.props.shopObj.name.toUpperCase()}
      </div>
    )
  }
}

export default connect(null, {setCurrentShop})(Shop)
