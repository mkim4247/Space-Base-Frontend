import React from 'react'
import { Grid } from 'semantic-ui-react'
import Shop from './Shop'
import EmptyShop from './EmptyShop'

const ShopContainer = props => {
  return(
    <div className='shop-container'>
      <Grid>
        <Grid.Row>
          {props.shopsArr.map( shop => (
            shop.shop_type !== "Empty" ?
              <Grid.Column
                width={8}
                key={shop.id}
                style={{
                  height: "100%",
                  padding: "0px"}}>
                <Shop
                  shopObj={shop}
                  key={shop.id}/>
              </Grid.Column>
              :
              <Grid.Column
                width={8}
                key={shop.id}
                style={{
                  height: "100%",
                  padding: "0px"}}>
                <EmptyShop
                  shopObj={shop}
                  key={shop.id} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ShopContainer
