import React from 'react'
import { connect } from 'react-redux'
import { setCurrentShop } from '../redux/actions'
import { Header } from 'semantic-ui-react'

import blue1 from '../images/Alien_sprites/alienBlue_walk1.png'
import blue2 from '../images/Alien_sprites/alienBlue_walk2.png'
import blue3 from '../images/Alien_sprites/alienBlue_walk3.png'
import blue4 from '../images/Alien_sprites/alienBlue_walk4.png'

import pink1 from '../images/Alien_sprites/alienPink_walk1.png'
import pink2 from '../images/Alien_sprites/alienPink_walk2.png'
import pink3 from '../images/Alien_sprites/alienPink_walk3.png'
import pink4 from '../images/Alien_sprites/alienPink_walk4.png'

import yellow1 from '../images/Alien_sprites/alienYellow_walk1.png'
import yellow2 from '../images/Alien_sprites/alienYellow_walk2.png'
import yellow3 from '../images/Alien_sprites/alienYellow_walk3.png'
import yellow4 from '../images/Alien_sprites/alienYellow_walk4.png'

import green1 from '../images/Alien_sprites/alienGreen_walk1.png'
import green2 from '../images/Alien_sprites/alienGreen_walk2.png'
import green3 from '../images/Alien_sprites/alienGreen_walk3.png'
import green4 from '../images/Alien_sprites/alienGreen_walk4.png'

class Shop extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      blueImg: blue1,
      blueTurn: false,

      pinkImg: pink1,
      pinkTurn: false,

      yellowImg: yellow3,
      yellowTurn: false,

      greenImg: green3,
      greenTurn: false,
    }
    this.blue = [blue1, blue2, blue3, blue4]
    this.blueWalkingID = setInterval(this.blueToggleImg, 1000)
    this.blueTurnID = setInterval(this.blueTurnImg, 2500)

    this.pink = [pink1, pink2, pink3, pink4]
    this.pinkWalkingID = setInterval(this.pinkToggleImg, 1)
    this.pinkTurnID = setInterval(this.pinkTurnImg, 3000)

    this.yellow = [yellow1, yellow2, yellow3, yellow4]
    this.yellowWalkingID = setInterval(this.yellowToggleImg, 300)
    this.yellowTurnID = setInterval(this.yellowTurnImg, 3000)

    this.green = [green1, green2, green3, green4]
    this.greenWalkingID = setInterval(this.greenToggleImg, 150)
    this.greenTurnID = setInterval(this.greenTurnImg, 3000)
  }

  blueTurnImg = () => {
    let current = this.state.blueTurn
    if(!current){
      this.setState({ blueImg: blue3, blueTurn: true })
    }
    else {
      this.setState({ blueImg: blue1, blueTurn: false })
    }
  }

  blueToggleImg = () => {
    let current = this.state.blueImg
    if(current === blue1){
      current = blue2
    } else if(current === blue2){
      current = blue1
    } else if (current === blue3){
      current = blue4
    } else if (current === blue4){
      current = blue3
    }
    this.setState({ blueImg: current})
  }

  pinkTurnImg = () => {
    let current = this.state.pinkTurn
    if(!current){
      this.setState({ pinkImg: pink3, pinkTurn: true })
    }
    else {
      this.setState({ pinkImg: pink1, pinkTurn: false })
    }
  }

  pinkToggleImg = () => {
    let current = this.state.pinkImg
    if(current === pink1){
      current = pink2
    } else if(current === pink2){
      current = pink1
    } else if (current === pink3){
      current = pink4
    } else if (current === pink4){
      current = pink3
    }
    this.setState({ pinkImg: current})
  }

  yellowTurnImg = () => {
    let current = this.state.yellowTurn
    if(!current){
      this.setState({ yellowImg: yellow1, yellowTurn: true })
    }
    else {
      this.setState({ yellowImg: yellow3, yellowTurn: false })
    }
  }

  yellowToggleImg = () => {
    let current = this.state.yellowImg
    if(current === yellow1){
      current = yellow2
    } else if(current === yellow2){
      current = yellow1
    } else if (current === yellow3){
      current = yellow4
    } else if (current === yellow4){
      current = yellow3
    }
    this.setState({ yellowImg: current})
  }

  greenTurnImg = () => {
    let current = this.state.greenTurn
    if(!current){
      this.setState({ greenImg: green1, greenTurn: true })
    }
    else {
      this.setState({ greenImg: green3, greenTurn: false })
    }
  }

  greenToggleImg = () => {
    let current = this.state.greenImg
    if(current === green1){
      current = green2
    } else if(current === green2){
      current = green1
    } else if (current === green3){
      current = green4
    } else if (current === green4){
      current = green3
    }
    this.setState({ greenImg: current})
  }

  showInfo = () => {
    this.props.setCurrentShop(this.props.shopObj)
  }

  setAlien = () => {
    switch(this.props.shopObj.shop_type){
      case "Housing":
       return this.state.blueImg
      case "Defense":
        return this.state.pinkImg
      case "Food":
        return this.state.greenImg
      case "Service":
        return this.state.yellowImg
      default:
        return this.state.blueImg
    }
  }

  setBackground = () => {
    switch(this.props.shopObj.shop_type){
      case "Housing":
       return {
         backgroundImage: 'url(https://i.imgur.com/z3ao9Dg.png)',
         backgroundSize: '200px 90px',
         border: '5px solid blue'}
      case "Defense":
        return {
          backgroundImage: 'url(https://i.imgur.com/nAMGg3m.png)',
          backgroundSize: '200px 90px',
          border: '5px solid red'}
      case "Food":
        return {
          backgroundImage: 'url(https://i.imgur.com/8BRc717.png)',
          backgroundSize: '200px 90px',
          border: '5px solid green'}
      case "Service":
        return {
          backgroundImage: 'url(https://i.imgur.com/A3gjjc3.png)',
          backgroundSize: '200px 90px',
          border: '5px solid yellow'}
        default:
          return {
            backgroundColor: 'black'
          }
    }
  }

  componentWillUnmount() {
    clearInterval(this.blueWalkingID)
    clearInterval(this.blueTurnID)

    clearInterval(this.pinkWalkingID)
    clearInterval(this.pinkTurnID)

    clearInterval(this.yellowWalkingID)
    clearInterval(this.yellowTurnID)

    clearInterval(this.greenWalkingID)
    clearInterval(this.greenTurnID)
  }

  render(){
    return(
      <div
        onClick={this.showInfo}
        className="filled-shop"
        style={this.setBackground()}>
          <Header size='medium' style={{textShadow: '3px 3px 3px white'}}>
            {this.props.shopObj.shop_type.toUpperCase()}
          </Header>
          <img
            onClick={()=>console.log("OUCH")}
            src={this.setAlien()}
            alt={this.props.shopObj.shop_type}
            className={this.props.shopObj.shop_type} />
      </div>
    )
  }
}





export default connect(null, { setCurrentShop })(Shop)
