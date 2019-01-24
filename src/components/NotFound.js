import React from 'react'
import Nav from './Nav'
import spagett from '../images/spagettsideeye.png'
import { Image } from 'semantic-ui-react'


class NotFound extends React.Component {

  render(){
    return(
      <div>
        <Nav />
        <div id='not-found'>
          <h1 id='not-found-header' style={{fontFamily: 'VT323, monospace'}}> Page Not Found </h1>
          <Image size='large' circular src={spagett} id='spagett' style={{height: '800px', width: '800px', marginTop: '100px', marginLeft: '600px' }}/>
        </div>
      </div>

    )
  }
}
export default NotFound
