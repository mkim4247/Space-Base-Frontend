import React from 'react'
import Nav from './Nav'

class NotFound extends React.Component {

  render(){
    return(
      <div>
        <Nav />
        <div id='not-found'>
          <h1 id='not-found-header' style={{fontFamily: 'VT323, monospace'}}> Page Not Found </h1>
        </div>
      </div>

    )
  }
}
export default NotFound
