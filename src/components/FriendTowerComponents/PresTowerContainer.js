import React from 'react'
import PresTower from './PresTower'

const PresTowerContainer = props => {
  return(
    <div id='tower-container'>
      <PresTower tower={props.tower}/>
    </div>
  )
}

export default PresTowerContainer
