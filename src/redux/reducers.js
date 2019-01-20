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
    case "UPDATE_TOWER":
      return action.tower
    default:
      return state
  }
}

const setFloorsReducer = (state=[], action) => {
  let floors;
  switch(action.type){
    case "SET_TOWER_FLOORS":
      floors = action.floors
      floors.forEach( floor => {
        return floor.shops.sort( (a,b) => a.id - b.id)
      })
      return floors

    case "ADD_FLOOR":
      return [...state, action.floor]
    case "ADD_SHOP":
      floors = state.map( f => {
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
        floors.forEach( floor => {
        return floor.shops.sort( (a,b) => a.id - b.id)
      })
      return floors
    case "DESTROY_SHOP":
      floors = state.map( f => {
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
    floors.forEach( floor => {
      return floor.shops.sort( (a,b) => a.id - b.id)
    })
    return floors
    default:
      return state
  }
}

const currentShopReducer = (state=null, action) => {
  switch(action.type){
    case "CHANGE_MENU":
      return action.shop
    case "ADD_SHOP":
      return action.shop
    case "DESTROY_SHOP":
      return action.shop
    default:
      return state
  }
}

const allUsersReducer = (state=[], action) => {
  switch(action.type){
    case "SET_ALL_USERS":
      return action.users
    default:
      return state
  }
}

const gameModeReducer = (state=true, action) => {
  switch(action.type){
    case "SWITCH_MODE":
      return !state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: setUserReducer,
  tower: setTowerReducer,
  floors: setFloorsReducer,
  currentShop: currentShopReducer,
  allUsers: allUsersReducer,
  gameMode: gameModeReducer
})





export default rootReducer
