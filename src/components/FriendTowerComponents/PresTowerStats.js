import React from 'react'
import { Segment, Header, Statistic } from 'semantic-ui-react'

const PresTowerStats = props => {
  let shops = props.tower.floors.map(floor => floor.shops)
  let housingShops = shops.flat().filter( shop => shop.shop_type === "Housing")
  let foodShops = shops.flat().filter( shop => shop.shop_type === "Food")
  let serviceShops = shops.flat().filter( shop => shop.shop_type === "Service")
  let emptyShops = shops.flat().filter( shop => shop.shop_type === "Empty")
  let housingAndFoodNeeded = Math.ceil(props.tower.population / 5)
  let defenseNeeded = props.tower.population

  return(
    <div id="stats">
      <Segment inverted align='center'>
        <Header size='huge'>
          TOWER STATS:
        </Header>
        <hr/>
        <Statistic.Group horizontal size='small'>
          <Statistic inverted>
            <Statistic.Value>
              {props.tower.floors.length}
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
              {housingShops.length} / {housingAndFoodNeeded}
            </Statistic.Value>
            <Statistic.Label>
              Housing Units Needed
            </Statistic.Label>
          </Statistic>
          <Statistic inverted color={housingAndFoodNeeded > foodShops.length ? 'red' : 'green'}>
            <Statistic.Value>
              {foodShops.length} / {housingAndFoodNeeded}
            </Statistic.Value>
            <Statistic.Label>
              Food Units Needed
            </Statistic.Label>
          </Statistic>
          <Statistic inverted color={defenseNeeded > props.tower.defense ? 'red' : 'green'}>
            <Statistic.Value>
              {props.tower.defense} / {defenseNeeded}
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
          <Statistic inverted color={ emptyShops.length > 0 ? 'yellow' : null }>
            <Statistic.Value>
              {emptyShops.length}
            </Statistic.Value>
            <Statistic.Label>
              # of Empty Units
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </div>
  )
}

export default PresTowerStats
