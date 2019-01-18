import React from 'react'
import { connect } from 'react-redux'
import { setCurrentShop, addingShop, updatingTowerShops } from '../redux/actions'

import { Header, Segment, Grid, Button } from 'semantic-ui-react'

class BuildMenu extends React.Component {


//////////REFACTOR TO USE MODALS
  buildShop = event => {
    if(this.props.tower.resources < parseInt(event.target.value)){
      alert("Insufficient resources!")
    }
    else {
      let shop = {...this.props.shop, shop_type: event.target.name, price: event.target.value}
      this.props.addingShop(shop)
      this.props.updatingTowerShops(shop)
    }
  }

  render(){
    return(
      <div id="build-menu">
        <Segment inverted>
          <Header size='huge'> Build Menu </Header>
            <hr/>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Button
                  size='large'
                  inverted
                  color='green'
                  onClick={this.buildShop}
                  name='Food'
                  value='-25'>
                    Food
                </Button>
                <div>Price: 25</div>
                <hr/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button
                  onClick={this.buildShop}
                  size='large'
                  inverted
                  color='blue'
                  name='Housing'
                  value='-25'>
                    Housing
                </Button>
                <div>Price: 25</div>
                <hr/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button
                  onClick={this.buildShop}
                  size='large'
                  inverted
                  color='yellow'
                  name='Service'
                  value='-30'>
                    Service
                </Button>
                <div>Price: 30</div>
                <hr/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button
                  onClick={this.buildShop}
                  size='large'
                  inverted
                  color='red'
                  name='Defense'
                  value='-50'>
                    Defense
                </Button>
                <div>Price: 50</div>
                <hr/>
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

////////UNUSED RIGHT NOW; CONSIDER ADDING MORE SHOPS AS BASE EXPANDS
// <Grid.Row>
//   <Grid.Column>
//     <Button onClick={this.buildShop} size='large'inverted color='blue' name='Recreation' value='-25'>
//     Recreation</Button>
//   </Grid.Column>
// </Grid.Row>


export default connect(mapStateToProps, { setCurrentShop, addingShop, updatingTowerShops })(BuildMenu)
