import React from 'react'
import { connect } from 'react-redux'
import { switchStatMenu } from '../redux/actions'
import { Segment, Header, Statistic, Button } from 'semantic-ui-react'

class TowerStats extends React.Component {
  switchMenu = event => {
    this.props.switchStatMenu()
  }

  render(){
    let shops = this.props.floors.map(floor => floor.shops)
    let housingShops = shops.flat().filter( shop => shop.shop_type === "Housing")
    let foodShops = shops.flat().filter( shop => shop.shop_type === "Food")
    let serviceShops = shops.flat().filter( shop => shop.shop_type === "Service")
    let emptyShops = shops.flat().filter( shop => shop.shop_type === "Empty")
    let housingAndFoodNeeded = Math.ceil(this.props.tower.population / 5)
    let defenseNeeded = this.props.tower.population

    return(
      <div id="stats">
        <Segment inverted align='center'>
          <Header size='huge'>
            TOWER STATS:
          </Header>
          <hr/>
          <Statistic.Group horizontal>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.floors.length}
              </Statistic.Value>
              <Statistic.Label>
                # of Floors
              </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>
                {shops.flat().length}
              </Statistic.Value>
              <Statistic.Label>
                # of Shops
              </Statistic.Label>
            </Statistic>
            <Statistic inverted color={housingAndFoodNeeded > housingShops.length ? 'red' : 'green'}>
              <Statistic.Value>
                {housingShops.length}/{housingAndFoodNeeded}
              </Statistic.Value>
              <Statistic.Label>
                Housing Units Needed
              </Statistic.Label>
            </Statistic>
            <Statistic inverted color={housingAndFoodNeeded > foodShops.length ? 'red' : 'green'}>
              <Statistic.Value>
                {foodShops.length}/{housingAndFoodNeeded}
              </Statistic.Value>
              <Statistic.Label>
                Food Units Needed
              </Statistic.Label>
            </Statistic>
            <Statistic inverted color={defenseNeeded > this.props.tower.defense ? 'red' : 'green'}>
              <Statistic.Value>
                {this.props.tower.defense}/{defenseNeeded}
              </Statistic.Value>
              <Statistic.Label>
                Defense Needed
              </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>
                {serviceShops.length}
              </Statistic.Value>
              <Statistic.Label>
                # of Service Units
              </Statistic.Label>
            </Statistic>
            <Statistic inverted color={ emptyShops.length > 0 ? 'yellow'  : null}>
              <Statistic.Value>
                {emptyShops.length}
              </Statistic.Value>
              <Statistic.Label>
                # of Empty Units
              </Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <Button onClick={this.switchMenu}>
            VIEW BASE STATS
          </Button>
          <br/>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tower: state.tower, floors: state.floors }
}

export default connect(mapStateToProps, { switchStatMenu })(TowerStats)
