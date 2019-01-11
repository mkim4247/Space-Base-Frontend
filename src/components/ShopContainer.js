import React from 'react'

import Shop from './Shop'
import EmptyShop from './EmptyShop'

import {Grid} from 'semantic-ui-react'

class ShopContainer extends React.Component {

  render(){
    return(
      <div className='shop-container'>
        ShopContainer
        <Grid celled>
          <Grid.Row>
           {this.props.shops.map( shop => (
             shop.shop_type !== "Empty" ?
              <Grid.Column width={8} key={shop.id}>
                <Shop type={shop.shop_type} key={shop.id} floor={shop.floor_id}/>
              </Grid.Column> :
              <Grid.Column key={shop.id}>
                <EmptyShop type={shop.shop_type} key={shop.id} floor={shop.floor_id} id={shop.id}/>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}




export default ShopContainer
