import React from 'react'
import { Grid } from 'semantic-ui-react'

import {connect} from 'react-redux'
import {setCurrentShop, addingShop, updatingTowerShops} from '../redux/actions'

class BuildMenu extends React.Component {

  buildShop = event => {
    this.props.shop.shop_type = event.target.name
    this.props.shop.name = event.target.name
    this.props.shop.price = event.target.value
    this.props.addingShop(this.props.shop)
    this.props.updatingTowerShops(this.props.shop)
  }

  render(){
    return(
      <div id="build-menu">
        <h2>Build a Shop</h2>
        <Grid celled columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <button onClick={this.buildShop} name='Food' value='2500'>
                Food
              </button>
            </Grid.Column>
            <Grid.Column>
              <button onClick={this.buildShop} name='Housing' value='2000'>
                Housing
              </button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <button onClick={this.buildShop} name='Defense' value='5000'>
                Defense
              </button>
            </Grid.Column>
            <Grid.Column>
              <button onClick={this.buildShop} name='Entertainment' value='3000'>
                Entertainment
              </button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <button onClick={this.buildShop} name='Service' value='3000'>
                Service
              </button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { shop: state.currentShop}
}

export default connect(mapStateToProps, {setCurrentShop, addingShop, updatingTowerShops})(BuildMenu)
