import React from 'react'
import { Grid } from 'semantic-ui-react'
import PresShop from './PresShop'
import PresEmptyShop from './PresEmptyShop'

const PresShopContainer = props => {
  return(
    <div className='shop-container'>
      <Grid>
        <Grid.Row>
          {props.shopsArr.map( shop => (
            shop.shop_type !== "Empty" ?
              <Grid.Column
                width={8}
                key={shop.id}
                style={{height: "100%", padding: "0px"}}>
                  <PresShop
                    shopObj={shop}
                    key={shop.id}/>
              </Grid.Column>
              :
              <Grid.Column
                width={8}
                key={shop.id}
                style={{height: "100%", padding: "0px"}}>
                  <PresEmptyShop
                    shopObj={shop}
                    key={shop.id} />
              </Grid.Column>
            ))
          }
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default PresShopContainer
