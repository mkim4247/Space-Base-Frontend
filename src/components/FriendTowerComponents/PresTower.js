import React from 'react'
import PresLobby from './PresLobby'
import PresConstructFloor from './PresConstructFloor'
import PresFloorContainer from './PresFloorContainer'

const PresTower = props => {
  return(
    <div id='tower'>
      <PresLobby />
        {props.tower.floors.map( floor => (
          <PresFloorContainer
            key={floor.id}
            floor={floor}/>
          ))}
      <PresConstructFloor/>
    </div>
  )
}

export default PresTower
