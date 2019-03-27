import React from 'react'
import { connect } from 'react-redux'
import { addingFloor, updatingTowerFloors } from '../redux/actions'
import { Header, Modal, Button, Icon } from 'semantic-ui-react'

class ConstructionFloor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }

  openModal = () => {
    if(this.props.tower.resources < 500){
      alert("Insufficient resources!")
    }
    else {
      this.setState({ showModal: true })
    }
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  addFloorClick = () => {
    let floor = {
      level: this.props.level,
      tower_id: this.props.tower.id
    }
    floor.price = 500
    this.props.addingFloor(floor)
    this.props.updatingTowerFloors(floor)
    this.setState({ showModal: false })
  }

  render(){
    const { showModal } = this.state

    return(
      <div>
        <div
          id='construction-floor'
          className='floor-container'
          onClick={this.openModal}>
        <br/>
        BUILD NEW FLOOR
        <br/>
        500 RESOURCES
        </div>

        <Modal
          basic
          size='large'
          onClose={this.closeModal}
          open={showModal}
          dimmer='blurring'>
          <Modal.Content>
            <Header
              inverted
              content='Build a New Floor'
              size='large'/>
            <Header
              inverted
              size='large'
              content='This will cost 500 Resouces. Build?' />
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
              onClick={this.addFloorClick}>
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
  return { tower: state.tower }
}


export default connect(mapStateToProps, { addingFloor, updatingTowerFloors })(ConstructionFloor)
