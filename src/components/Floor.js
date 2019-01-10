import React from 'react'

import ShopContainer from './ShopContainer'
import {Grid} from 'semantic-ui-react'

class Floor extends React.Component {

  render(){
    return(
      <div id='floor' >
        <ShopContainer shops={this.props.shops}/>
      </div>
    )
  }
}

export default Floor
