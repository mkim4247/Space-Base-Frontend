import React from 'react'
import { connect } from 'react-redux'
import Tower from './Tower'

///// PAUSE ALL INTERVALS BTWN GAME MODES <----


class TowerContainer extends React.Component {
  constructor(){
    super()

    /*  Regular Game Interval  */
    this.buildRateID = setInterval(() => {
      let shops = this.props.floors.map(floor => floor.shops)
      let resourcesShops = shops.flat().filter( shop => shop.shop_type !== "Housing" && shop.shop_type !== "Defense")
      let housingShops = shops.flat().filter( shop => shop.shop_type === "Housing")
      let foodShops = shops.flat().filter( shop => shop.shop_type === "Food")


    /* resources ROI:
        # of food/service * 10 + pop size */
      let resourcesGained = 10 * resourcesShops.length
      let newResources = this.props.tower.resources + resourcesGained + this.props.tower.population

    /* Happiness ROI:
        # req = pop size/5
          req vs # food/housing =>
          Happiness +/- (req - Math.ceil(#)) */
      let housingAndFoodNeeded = Math.ceil(this.props.tower.population / 5)
      let newHappiness = this.props.tower.happiness

      if(housingAndFoodNeeded > foodShops.length || housingAndFoodNeeded > housingShops.length)
        if(newHappiness > 0){
          newHappiness -= (housingAndFoodNeeded - ( foodShops.length + housingShops.length))
          if(newHappiness < 0){
            newHappiness = 0
          }
        }
      else if (housingAndFoodNeeded < foodShops.length || housingAndFoodNeeded < housingShops.length){
        if(newHappiness < 100){
          newHappiness += ((housingShops.length - housingAndFoodNeeded) + (foodShops.length - housingAndFoodNeeded))
          if(newHappiness > 100){
            newHappiness = 100
          }
        }
      }

    /* Population ROI:
      Happiness > 75 => pop++ */
      let newPopulation = this.props.tower.population
      if (this.props.tower.happiness >= 75 || newPopulation > 1){
        newPopulation++
      }
      else {
        newPopulation--
        if(newPopulation < 1){
          newPopulation = 1
        }
      }

      let tower = {
        ...this.props.tower,
        resources: newResources,
        happiness: newHappiness,
        population: newPopulation
      }

      this.props.applyingRateTower(tower)
    }, 10000000
  )

    this.eventID = setInterval(() => {
      let shops = this.props.floors.map(floor => floor.shops)
      let serviceShops = shops.flat().filter( shop => shop.shop_type === "Service")
      let housingShops = shops.flat().filter( shop => shop.shop_type === "Housing")
      let foodShops = shops.flat().filter( shop => shop.shop_type === "Food")
      let defenseShops = shops.flat().filter( shop => shop.shop_type === "Defense")

      let controller = Math.random()
        console.log(controller)

      let defenseNeeded = this.props.tower.population

      let randomEvents = [
        function lottery(){
          alert("One of our exploration parties found a cache of resources! Use them wisely!")

        },
        function unlottery(){
          alert("You suck brah")
        }
      ]

      if(this.props.tower.defense < defenseNeeded) {
        if(controller > 0.50){
          randomEvents[Math.floor(Math.random() * 1)]()
        }
      }




            /*

            Defense:
              Each Defense shop => 10 points
              Pop > 25 => Pop/25 = # Defense needed

            RANDOM EVENTS:
              1) Found gold:
                Resources += (Resources * 5-10%)
              2) Defense check:
                Def needed < def stat?
                  => resources -= (resources * 5-10%)
                    Pop -= (Pop * 1-5%)
              3) Happiness > 90 ?
                  => Pop += (Pop * 1-5%)
                    resources += (resources * 1-5%)
              4) Shop out of business
                  (1-3% chance)
              5) Bunker Repairs
                  resources -= (resources * 5-10%)
              6) Crime
              7) Disease
              8)
              9)
              10)

            */
    }, 5000000)
  }

  componentWillUnmount(){
    clearInterval(this.eventID)
  }

  render(){
    return(
      <div id='tower-container'>
        <Tower />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tower: state.tower,
    floors: state.floors
  }
}

export default connect(mapStateToProps)(TowerContainer)
