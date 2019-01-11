import React from 'react'

class Shop extends React.Component {

  showInfo = () => {
    console.log(this.props.type)
  }

  render(){
    return(
      <div onClick={this.showInfo}
        className={"filled-shop"}>
        {this.props.type}
      </div>
    )
  }
}



export default Shop
