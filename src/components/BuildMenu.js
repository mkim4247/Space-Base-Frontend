import React from 'react'
import { connect } from 'react-redux'
import { setCurrentShop, addingShop, updatingTowerShops } from '../redux/actions'

import { Header, Segment, Grid, Button, Modal, Icon, Popup } from 'semantic-ui-react'

class BuildMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      type: '',
      price: 0,
      color: ''
    }
  }

  buildShop = event => {
    event.persist()
    console.log(event.currentTarget)
    let price = parseInt(-1 * event.currentTarget.value)

    if(this.props.tower.resources < price){
      alert("Insufficient resources!")
    }
    else {
      if (event.currentTarget.name === "Defense"){
        this.props.shop.defense = 10
      }
      let shop = {...this.props.shop, shop_type: event.currentTarget.name, price: parseInt(-1 * event.currentTarget.value), defense: 10}
      this.props.addingShop(shop)
      this.props.updatingTowerShops(shop)
      this.setState({ showModal: false })
    }
  }

  openModal = (event, type, price, color) => {
    if(this.props.shop === null){
      alert("You must select an empty shop first")
    }
    else {
      this.setState({ showModal: true, type: type, price: price, color: color })
    }
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render(){
    const { showModal } = this.state

    return(
      <div id="build-menu">
        <Segment inverted>
          <Header size='huge'> BUILD: </Header>
            <hr/>
          <Grid columns='equal' celled='internally'>
            <Grid.Row>
              <Grid.Column>
                <Button
                  onClick={(e) => this.openModal(e, "Housing", 25, 'blue')}
                  size='large'
                  inverted
                  color='blue'>
                    Housing
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button
                  onClick={(e) => this.openModal(e, "Food", 25, 'green')}
                  size='large'
                  inverted
                  color='green'>
                    Food
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button
                  onClick={(e) => this.openModal(e, "Service", 30, 'yellow')}
                  size='large'
                  inverted
                  color='yellow'>
                    Service
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button
                  onClick={(e) => this.openModal(e, "Defense", 50, 'red')}
                  size='large'
                  inverted
                  color='red'>
                    Defense
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Modal
            basic
            size='large'
            onClose={this.closeModal}
            open={showModal}
            dimmer='blurring'
            >
            <Modal.Content>
              <Header inverted content={`Build a ${this.state.type} unit`} size='large'/>
              <Header inverted size='large' content={`This will cost ${this.state.price} resources. Build?`}/>
            </Modal.Content>

            <Modal.Actions>
              <Button
                basic
                size='large'
                inverted
                onClick={this.closeModal}
                color='red'>
                <Icon name='remove' />
                  No
              </Button>
              <Button
                basic
                size='large'
                inverted
                color='green'
                onClick={this.buildShop}
                name={this.state.type}
                value={`-${this.state.price}`}>
                <Icon name='checkmark' />
                  Yes
              </Button>
            </Modal.Actions>
          </Modal>


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
