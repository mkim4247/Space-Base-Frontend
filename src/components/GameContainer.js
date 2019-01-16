import React from 'react'

import TowerContainer from './TowerContainer'
import BuildMenu from './BuildMenu'
import ShowInfo from './ShowInfo'
import Stats from './Stats'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import SpaceTravel from './SpaceTravel'


class GameContainer extends React.Component {

  constructor(){
    super()
    this.state = {build: true }
  }


  setFundsRate = () => {
    let shops = this.props.floors.map(floor => floor.shops)
    let shopsArr = shops.flat().filter( shop => shop.shop_type !== "Housing" && shop.shop_type !== "Defense")

    let rate = 10 * shopsArr.length
    console.log(rate)
  }


  render(){
    return(
      <div>
        {!this.state.build ?
          <SpaceTravel /> :

      <div id='game-container'>
        {this.props.tower.name}
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Stats />
            </Grid.Column>
            <Grid.Column width={8}>
              <TowerContainer />
            </Grid.Column>
            <Grid.Column width={4}>
              {this.props.shop.shop_type === "Empty" ?
                <BuildMenu /> : <ShowInfo />
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower, floors: state.floors, shop: state.currentShop }
}

export default connect(mapStateToProps)(GameContainer)
