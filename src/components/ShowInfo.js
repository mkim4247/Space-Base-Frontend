import React from 'react'
import { connect } from 'react-redux'
import { destroyingShop, updatingTowerShops } from '../redux/actions'
import { Header, Button, Segment, Modal, Icon, Statistic } from 'semantic-ui-react'

class ShowInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }

  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  destroyShop = () => {
    this.props.destroyingShop(this.props.shop)
    this.props.updatingTowerShops(this.props.shop)
    this.setState({ showModal: false })
  }

  assignInfo = () => {
    if(this.props.shop.shop_type === "Food"){
      this.props.shop.price = -20
      this.props.shop.info = "5 Meals"
    }
    else if(this.props.shop.shop_type === "Housing"){
      this.props.shop.price = -20
      this.props.shop.info = "5 Rooms"
    }
    // else if(this.props.shop.shop_type === "Recreation"){
    //   this.props.shop.price = 30
    //   this.props.shop.info = "5 Rec Provided"
    // }
    else if(this.props.shop.shop_type === "Service"){
      this.props.shop.price = -25
      // this.props.shop.info = "5 Services Provided"
    }
    else if(this.props.shop.shop_type === "Defense"){
      this.props.shop.price = -30
      this.props.shop.defense = -10
      this.props.shop.info = "10 Defense"
    }
  }

  render(){
    const { showModal } = this.state

    return(
      <div id='show-info'>
        {this.assignInfo()}
        <Segment inverted align='center'>
          <Header size="huge"> SHOP INFO: </Header>
          <hr/>
          <Statistic.Group horizontal size='small' align='center'>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.shop.shop_type}
              </Statistic.Value>
              <Statistic.Label>
                Type
              </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.shop.info}
              </Statistic.Value>
              <Statistic.Label>
                Effect
              </Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>
                {-1 * this.props.shop.price}
              </Statistic.Value>
              <Statistic.Label>
                Sell Value
              </Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <Button
            onClick={this.openModal}
            size='large'
            inverted
            color='red'>
              Sell Shop
          </Button>
        </Segment>

        <Modal
          basic
          size='large'
          onClose={this.closeModal}
          open={showModal}
          dimmer='blurring'>
          <Modal.Content>
            <Header inverted size='large' content={`Sell selected shop?`}/>
            <Header inverted size='large' content={`You will receive ${this.props.shop.price * -1} resources back. Sell?`}/>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              inverted
              size='large'
              onClick={this.closeModal}
              color='red'>
              <Icon name='remove' />
              No
            </Button>
            <Button
              basic
              inverted
              size='large'
              color='green'
              onClick={this.destroyShop}>
              <Icon name='checkmark'/>
              Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    shop: state.currentShop
  }
}

export default connect(mapStateToProps, { destroyingShop, updatingTowerShops })(ShowInfo)
