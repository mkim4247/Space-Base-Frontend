import React from 'react'
import { Segment, Grid, Button } from 'semantic-ui-react'

import {connect} from 'react-redux'
import {setCurrentShop, addingShop, updatingTowerShops} from '../redux/actions'

class BuildMenu extends React.Component {

  buildShop = event => {
    if(this.props.tower.funds < parseInt(event.target.value)){
      alert("Insufficient funds!")
    }
    else {
      let shop = {...this.props.shop, shop_type: event.target.name, name: event.target.name, price: event.target.value}
      this.props.addingShop(shop)
      this.props.updatingTowerShops(shop)
    }
  }

  render(){
    return(
      <div id="build-menu">
        <Segment inverted>
        <h2>Build a Shop</h2>
        <Grid celled columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Button size='large'inverted color='blue' onClick={this.buildShop} name='Food' value='25'>
              Food</Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={this.buildShop} size='large'inverted color='blue' name='Housing' value='25'>
              Housing</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.buildShop} size='large'inverted color='blue' name='Recreation' value='25'>
              Recreation</Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={this.buildShop} size='large'inverted color='blue' name='Service' value='30'>
              Service</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.buildShop} size='large'inverted color='blue' name='Defense' value='200'>
              Defense</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { shop: state.currentShop, tower: state.tower}
}

export default connect(mapStateToProps, {setCurrentShop, addingShop, updatingTowerShops})(BuildMenu)
