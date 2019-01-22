import React from 'react'
import LobbyFriend from './LobbyFriend'
import CFFriend from './CFFriend'
import FCFriend from './FCFriend'

class TowerFriend extends React.Component {
  render(){
    return(
      <div id='tower'>
        <LobbyFriend />
          {this.props.tower.floors.map( floor => (
            <FCFriend
                key={floor.id}
                floor={floor}/>
          ))}
        <CFFriend/>
      </div>
    )
  }
}

export default TowerFriend
