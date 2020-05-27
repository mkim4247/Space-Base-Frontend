import React from 'react'
import { Header } from 'semantic-ui-react'

const PresShop = props => {
  const setBackground = () => {
    switch(props.shopObj.shop_type){
      case "Housing":
       return {
         backgroundImage: 'url(https://i.imgur.com/z3ao9Dg.png)',
         backgroundSize: '235px 90px',
         border: '5px solid blue'}
      case "Defense":
        return {
          backgroundImage: 'url(https://i.imgur.com/nAMGg3m.png)',
          backgroundSize: '235px 90px',
          border: '5px solid red'}
      case "Food":
        return {
          backgroundImage: 'url(https://i.imgur.com/8BRc717.png)',
          backgroundSize: '235px 90px',
          border: '5px solid green'}
      case "Service":
        return {
          backgroundImage: 'url(https://i.imgur.com/A3gjjc3.png)',
          backgroundSize: '235px 90px',
          border: '5px solid yellow'}
      default:
        return {
          backgroundColor: 'black'
        }
    }
  }

  return(
    <div
      className="filled-shop"
      style={this.setBackground()}>
      <Header size='medium'>
        {props.shopObj.shop_type.toUpperCase()}
      </Header>
    </div>
  )
}

export default PresShop
