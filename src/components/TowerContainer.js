import React from 'react'
import { connect } from 'react-redux'
import { applyingRateTower } from '../redux/actions'
import { Segment } from 'semantic-ui-react'
import Tower from './Tower'

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
      if(housingAndFoodNeeded > foodShops.length || housingAndFoodNeeded > housingShops.length){
        if(newHappiness > 0){
          newHappiness = newHappiness - (housingAndFoodNeeded - ( foodShops.length + housingShops.length))
        }
      }
      else if (foodShops.length >= housingAndFoodNeeded && housingShops.length >= housingAndFoodNeeded){
        if(newHappiness < 100){
          newHappiness = newHappiness + ((housingShops.length - housingAndFoodNeeded) + (foodShops.length - housingAndFoodNeeded)) + 1
        }
      }
      if(newHappiness > 100){
        newHappiness = 100
      }
      else if(newHappiness < 0){
        newHappiness = 0
      }
    /* Population ROI:
      Happiness > 75 => pop++ */
      let newPopulation = this.props.tower.population
      if (this.props.tower.happiness >= 75){
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
    }, 1000000
  )

/* SETTING UP RANDOM EVENTS */
    this.eventID = setInterval(() => {
      let shops = this.props.floors.map(floor => floor.shops)
      let serviceShops = shops.flat().filter( shop => shop.shop_type === "Service")
      let housingShops = shops.flat().filter( shop => shop.shop_type === "Housing")
      let foodShops = shops.flat().filter( shop => shop.shop_type === "Food")
      let defenseShops = shops.flat().filter( shop => shop.shop_type === "Defense")

      let controller = Math.random()
        console.log(controller)

      let defenseNeeded = this.props.tower.population

    /*  ARRAY OF RANDOM EVENT FUNCTION OBJECTS  */

      let basicEvents = [
        function cacheFound(){
          let addResources = this.props.tower.resources * ((Math.random() * (10 - 5) + 5)/100)
          if (addResources > 1000){
            addResources = 1000
          }
          else if(addResources < 50) {
            addResources = 50
          }
          let tower = {...this.props.tower, resources: Math.ceil(this.props.tower.resources + addResources)}
          this.props.applyingRateTower(tower)
          console.log(`One of our exploration parties found a cache of resources! Use them wisely! Resources Gained: ${Math.ceil(addResources)}`)
        }.bind(this),

        function baseRepairs(){
          let negResources = this.props.tower.resources * ((Math.random() * (20 - 10) + 10)/100)
          if (negResources > 1000){
            negResources = 1000
          }
          else if(negResources < 50) {
            negResources = 50
          }

          let newResources = Math.ceil(this.props.tower.resources - negResources)
          if(newResources < 0){
            newResources = 0
          }

          let tower = {...this.props.tower, resources: newResources}
          this.props.applyingRateTower(tower)
          console.log(`Our base sustained damages during a recent space storm and will require repairs. Resources Lost: ${Math.ceil(negResources)}` )
        }.bind(this),

        function happinessBoost(){
          let addHappiness = this.props.tower.happiness + 5
          if(addHappiness > 100){
            addHappiness = 100
          }
          let tower = {...this.props.tower, happiness: addHappiness}
          this.props.applyingRateTower(tower)
          console.log(`Our colony has been running smoothly, we received perfect scores on our last survey! Well done! Happiness Gained: 5`)
        }.bind(this),

        function happinessLost(){
          let negHappiness = this.props.tower.happiness - 5
          if(negHappiness < 0){
            negHappiness = 0
          }
          let tower = {...this.props.tower, happiness: negHappiness}
          this.props.applyingRateTower(tower)
          console.log(`We received some terribly low scores on our last base survey... Happiness Lost: 5`)
        }.bind(this),

        function popBoost(){
          let addPop = Math.ceil(this.props.tower.population * ((Math.random() * (5 - 3) + 3)/100))
          let newPop = this.props.tower.population + addPop
          let tower = {...this.props.tower, population: newPop}
          this.props.applyingRateTower(tower)
          console.log(`News has spread our base has been doing well, new colonists have arrived! Population gained: ${Math.ceil(addPop)}` )
        }.bind(this),

        function popLost(){
          let negPop = Math.ceil(this.props.tower.population * ((Math.random() * (5 - 3) + 3)/100))
          let newPop = this.props.tower.population - negPop
          if(newPop < 0){
            newPop = 0
          }
          let tower = {...this.props.tower, population: newPop}
          this.props.applyingRateTower(tower)
          console.log(`Some colonists have become disgruntled and decided to leave our base. Population Lost: ${Math.ceil(negPop)}` )
        }.bind(this)
      ]

      let advancedEvents = [
        function alienAttack(){
          if(this.props.tower.defense < defenseNeeded) {
            let newResources = this.props.tower.resources * ((Math.random() * (20 - 10) + 10)/100)
            let newHappiness = ((Math.random() * (20 - 10) + 10))
            let newPopulation =  this.props.tower.population * ((Math.random() * (20 - 10) + 10)/100)

            let tower = {...this.props.tower, resources: this.props.tower.resources - newResources, happiness: this.props.tower.happiness - newHappiness, population: this.props.tower.population - newPopulation}

            this.props.applyingRateTower(tower)
            console.log("Our base was attacked by an unknown enemy in the middle of the night. We've sustained numerous damages")
            console.log(`Resources Lost: ${newResources}. Happiness Lost: ${newHappiness}. Population Lost: ${newPopulation}`)
          }
        }.bind(this),

        function raidParty(){
          if(this.props.tower.defense - defenseNeeded > 50){
            let newResources = this.props.tower.resources * ((Math.random() * (20 - 10) + 10)/100)
            let newHappiness = ((Math.random() * (20 - 10) + 10))
            let newPopulation =  this.props.tower.population * ((Math.random() * (20 - 10) + 10)/100)

            let tower = {...this.props.tower, resources: this.props.tower.resources + newResources, happiness: this.props.tower.happiness + newHappiness, population: this.props.tower.population + newPopulation}

            this.props.applyingRateTower(tower)
            console.log("Our forces thwarted a surprise attack and chased them back to their base successfully!")
            console.log(`Resources Gained: ${newResources}. Happiness Gained: ${newHappiness}. Population Gained: ${newPopulation}`)
          }
        }.bind(this),

        function crime() {

        }.bind(this),

        function disease() {

        }.bind(this),

        function outOfBusiness() {

        }.bind(this),

        function contestWinner() {

        }.bind(this),



      ]

        if(controller > 0.5){
          let index = Math.floor(Math.random() * 6)
          console.log(index)
          basicEvents[index]()
        }

    }, 500000)
  }

  componentWillUnmount(){
    clearInterval(this.eventID)
    clearInterval(this.buildRateID)
  }

  render(){
    return(
      <div id='tower-container'>
        <Segment raised>
        <Tower />
        </Segment>
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

export default connect(mapStateToProps, { applyingRateTower })(TowerContainer)
