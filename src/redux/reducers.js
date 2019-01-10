import { combineReducers } from 'redux'


const setUserReducer = (state=null, action) => {
  switch(action.type){
    case "SET_CURRENT_USER":
      return action.user
    default:
      return state
  }
}

const setTowerReducer = (state={}, action) => {
  switch(action.type){
    case "SET_USER_TOWER":
      return action.tower
    default:
      return state
  }
}

const setFloorsReducer = (state=[], action) => {
  switch(action.type){
    case "SET_TOWER_FLOORS":
      return action.floors
    case "ADD_FLOOR":
      return [...state, action.floor]
    default:
      return state
  }
}

const setShopsReducer = (state=[], action) => {
  switch(action.type){
    case "SET_FLOOR_SHOPS":
      return action.shops
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: setUserReducer,
  tower: setTowerReducer,
  floors: setFloorsReducer,
  // shops: setShopsReducer
})





export default rootReducer
