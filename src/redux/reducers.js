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
    case "ADD_SHOP":
      let floors = state.map( f => {
        if(f.id === action.shop.floor_id){
          let shops = f.shops.map( s => {
            if(s.id === action.shop.id){
              return action.shop
            }
            else {
              return s
            }
          })
          f.shops = shops
          return f
        }
        else {
          return f
        }
      })
      return floors
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: setUserReducer,
  tower: setTowerReducer,
  floors: setFloorsReducer
})





export default rootReducer
