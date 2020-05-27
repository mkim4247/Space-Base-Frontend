import React from 'react'
import Nav from './Nav'
// import spagett from '../images/spagettsideeye.png'
// import { Image } from 'semantic-ui-react'


const NotFound = () => {
  return(
    <div>
      <Nav />
      <div id='not-found'>
        <h1 id='not-found-header'
          style={{
            fontFamily: 'VT323, monospace',
            textShadow: '2px 2px 2px white'}}>
          Page Not Found
        </h1>
      </div>
    </div>
  )
}

export default NotFound

// <Image size='large' circular src={spagett} id='spagett' style={{position: 'absolute', height: '50%', width: '50%', top: '50%', left: '50%' }}/>
