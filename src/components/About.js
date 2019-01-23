import React from 'react'
import Nav from './Nav'

class About extends React.Component {

  render(){
    return(
      <div>
        <Nav />
        <div>
        Welcome Commander!
        <br/>
        <p> You've been tasked with leading our colonization efforts on a new planet. Mission Command will be closely monitoring your performance and will reward or penalize you as they deem fit.</p>

        <p> Over time, they will send you extra resources to keep expanding, and based on how well the Space Base is doing, more people may decide to join the colonization efforts.  </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
        </div>
      </div>
    )
  }
}

export default About
