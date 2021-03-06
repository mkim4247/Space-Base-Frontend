import React from 'react'
import { connect } from 'react-redux'
import { applyingRateTower } from '../redux/actions'
import { Grid } from 'semantic-ui-react'
import TowerContainer from './TowerContainer'
import BuildMenu from './BuildMenu'
import ShowInfo from './ShowInfo'
import Stats from './Stats'
import TowerStats from './TowerStats'
import Explore from './Explore'
import GamePanel from './GamePanel'
import ReactAudioPlayer from 'react-audio-player';
import sound from '../audio/WheresmySpaceship.mp3'

const GameContainer = props => {
  return(
    <div>
      <ReactAudioPlayer
        src={sound}
        autoPlay={true}
        loop={true}
        muted={props.muted}/>

      {props.gameMode ?
        <div id='game-container'>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column width={4}>
                {props.statsMenu ?
                  <Stats />
                  :
                  <TowerStats />
                }
              </Grid.Column>
              <Grid.Column width={8}>
                <GamePanel />
                <TowerContainer />
              </Grid.Column>
              <Grid.Column width={4}>
                {props.shop === null ?
                  <BuildMenu />
                  :
                  props.shop.shop_type === 'Empty' ?
                    <BuildMenu />
                    :
                    <ShowInfo />}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        :
        <Explore />
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tower: state.tower,
    shop: state.currentShop,
    gameMode: state.gameMode,
    statsMenu: state.statsMenu,
    muted: state.muted
   }
}

export default connect(mapStateToProps, { applyingRateTower })(GameContainer)
