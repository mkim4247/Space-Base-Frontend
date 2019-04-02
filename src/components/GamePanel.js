import React from 'react'
import { connect } from 'react-redux'
import { Header, Segment, Button, Modal, Icon } from 'semantic-ui-react'
import { switchGameMode, muteMusic } from '../redux/actions'

class GamePanel extends React.Component {
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

  switchModes = event => {
    this.props.switchGameMode()
    this.props.muteMusic()
    this.setState({ showModal: false })
  }

  render(){
    const { showModal } = this.state

    return(
      <div id='game-panel'>
        <Segment inverted>
          <Button
            inverted
            size='medium'
            color='blue'
            onClick={this.openModal}>
              <Icon name='space shuttle' inverted /> EXPLORE!
          </Button>
        </Segment>

        <Modal
          basic
          size='large'
          onClose={this.closeModal}
          open={showModal}
          dimmer='blurring'>
          <Modal.Content>
            <Header
              inverted
              size='large'
              content={'Scout the local area for resources?'} />
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
              onClick={this.switchModes}
              color='green'>
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
  return { muted: state.muted }
}

export default connect(mapStateToProps, { switchGameMode, muteMusic })(GamePanel)
