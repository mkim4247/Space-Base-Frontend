import React from 'react'
import { Menu } from 'semantic-ui-react'

class BuildMenu extends React.Component {

  buildShop = () => {
    console.log("Building shop")
  }

  destroyShop = () => {
    console.log("Destroying shop")
  }

  render(){
    return(
      <div id="build-menu">
        <Menu vertical>
          <Menu.Menu position='right' >
            <Menu.Item name='Build' onClick={this.buildShop}>Build<img alt='Build' src="https://img.icons8.com/nolan/64/000000/work.png"/>
            </Menu.Item>
            <Menu.Item name='Destroy' onClick={this.destroyShop}>Destroy<img alt="Destroy" src="https://img.icons8.com/nolan/64/000000/delete.png"/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default BuildMenu
