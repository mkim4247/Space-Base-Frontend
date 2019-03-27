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
      color: '',
      icon: ''
    }
  }

  buildShop = event => {
    let price = parseInt(-1 * event.currentTarget.value)

    if(this.props.tower.resources < price){
      alert("Insufficient resources!")
    }
    else {
      if (event.currentTarget.name === "Defense"){
        this.props.shop.defense = 10
      }
      let shop = {
        ...this.props.shop,
        shop_type: event.currentTarget.name,
        price: parseInt(-1 * event.currentTarget.value),
        defense: 10
      }
      this.props.addingShop(shop)
      this.props.updatingTowerShops(shop)
      this.setState({ showModal: false })
    }
  }

  openModal = (event, type, price, color, icon) => {
    if(this.props.shop === null){
      alert("You must select an empty shop first")
    }
    else {
      this.setState({
        showModal: true,
        type: type,
        price: price,
        color: color,
        icon: icon
      })
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
          <Header size='huge'>
            BUILD UNIT:
          </Header>
          <hr/>
          <Grid columns='equal' celled='internally'>
            <Grid.Row>
              <Grid.Column>
                <Popup
                  content="COSTS 25 RESOURCES"
                  trigger={
                    <Button
                      onClick={(e) => this.openModal(e, "Housing", 25, 'blue', 'bed')}
                      size='large'
                      inverted
                      color='blue'>
                        HOUSING
                    </Button>
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Popup
                  content="COSTS 25 RESOURCES"
                  trigger={
                    <Button
                      onClick={(e) => this.openModal(e, "Food", 25, 'green', 'utensils')}
                      size='large'
                      inverted
                      color='green'>
                        FOOD
                    </Button>
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Popup
                  content="COSTS 30 RESOURCES"
                  trigger={
                    <Button
                      onClick={(e) => this.openModal(e, "Service", 30, 'yellow', 'dollar sign')}
                      size='large'
                      inverted
                      color='yellow'>
                        SERVICE
                    </Button>
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Popup
                  content="COSTS 50 RESOURCES"
                  trigger={
                    <Button
                      onClick={(e) => this.openModal(e, "Defense", 50, 'red', 'shield')}
                      size='large'
                      inverted
                      color='red'>
                        DEFENSE
                    </Button>
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Modal
            basic
            size='large'
            onClose={this.closeModal}
            open={showModal}
            dimmer='blurring'>
          <Modal.Content>
            <Icon
              name={this.state.icon}
              size='large'
              circular
              inverted/>
            <Header
              inverted
              size='large'
              content={`Build a ${this.state.type} unit`}/>
            <Header
              inverted
              size='large'
              content={`This will cost ${this.state.price} resources. Build?`}/>
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


/*
            {this.props.tower.population > 30 ?
              <div>
                <Segment inverted align='center'>
                  <hr/>
                  <Header size='huge'> ADVANCED UNITS: </Header>
                    <hr/>
                  <Grid columns='equal' celled='internally'>
              <Grid.Row>
                <Grid.Column>
                  <Popup content="Costs 100 Resources" trigger={
                    <Button
                      onClick={(e) => this.openModal(e, "Science", 100, 'purple', 'lightbulb outline')}
                      size='large'
                      inverted
                      color='purple'>
                        SCIENCE
                    </Button>
                  }/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Popup content="Costs 100 Resources" trigger={
                    <Button
                      onClick={(e) => this.openModal(e, "Science", 100, 'purple', 'lightbulb outline')}
                      size='large'
                      inverted
                      color='purple'>
                        SCIENCE
                    </Button>
                  }/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Popup content="Costs 100 Resources" trigger={
                    <Button
                      onClick={(e) => this.openModal(e, "Science", 100, 'purple', 'lightbulb outline')}
                      size='large'
                      inverted
                      color='purple'>
                        SCIENCE
                    </Button>
                  }/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
              :
              null
            }
*/
