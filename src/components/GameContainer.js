import React from 'react'
import { connect } from 'react-redux'
import { applyingRateTower } from '../redux/actions'
import { Grid } from 'semantic-ui-react'
import TowerContainer from './TowerContainer'
import BuildMenu from './BuildMenu'
import ShowInfo from './ShowInfo'
import Stats from './Stats'
import Explore from './Explore'
import GamePanel from './GamePanel'

class GameContainer extends React.Component {
  render(){
    return(
      <div>
        {this.props.gameMode ?
          <div id='game-container'>
            <Grid>
              <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Stats />
            </Grid.Column>
            <Grid.Column width={8}>
              <GamePanel />
              <TowerContainer />
            </Grid.Column>
            <Grid.Column width={4}>
              {this.props.shop === null ? <BuildMenu /> : this.props.shop.shop_type === 'Empty' ? <BuildMenu /> : <ShowInfo />}
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div> :
      <Explore />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tower: state.tower,
    shop: state.currentShop,
    gameMode: state.gameMode
   }
}

export default connect(mapStateToProps, { applyingRateTower })(GameContainer)
