import React from 'react'

import TowerContainer from './TowerContainer'
import BuildMenu from './BuildMenu'
import ShowInfo from './ShowInfo'
import Stats from './Stats'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'

class GameContainer extends React.Component {

  render(){
    return(
      <div id='game-container'>
        GameContainer
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Stats />
              </Grid.Column>
              <Grid.Column width={8}>
                <TowerContainer />
              </Grid.Column>
              <Grid.Column width={4}>
                {this.props.shop.shop_type === "Empty" ?
                  <BuildMenu /> : <ShowInfo />
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { shop: state.currentShop }
}

export default connect(mapStateToProps)(GameContainer)
