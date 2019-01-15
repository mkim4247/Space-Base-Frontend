import React from 'react'
import {connect} from 'react-redux'
import {setCurrentShop} from '../redux/actions'

class Shop extends React.Component {

  showInfo = () => {
    this.props.setCurrentShop(this.props.shopObj)
  }

  render(){
    return(
      <div onClick={this.showInfo}
        className="filled-shop">
        {this.props.shopObj.name.toUpperCase()}
      </div>
    )
  }
}

export default connect(null, {setCurrentShop})(Shop)
