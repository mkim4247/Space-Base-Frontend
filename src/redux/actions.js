export const setCurrentUser = (user) => {
  return { type: "SET_CURRENT_USER", user}
}

export const settingCurrentUser = (user) => {
  return (dispatch) => {
    fetch(`http://localhost:4247/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        alert('Incorrect username and/or password')
      }else{
        console.log(data.user_info)
        dispatch(setCurrentUser(data.user_info))
        localStorage.setItem('token', data.token)
      }
    })
  }
}

export const creatingNewUser = user => {
  return (dispatch) => {
    fetch(`http://localhost:4247/api/v1/users`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        console.log(data)
      } else {
        console.log(data)
        this.props.setCurrentUser(data.user_info)
        localStorage.setItem('token', data.token)
      }
    })
  }
}

// const creatingNewTower = user => {
//   return (dispatch) => {
//     fetch(`http://localhost:4247/api/v1/towers`, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify( )
//     }
//
// }

export const checkingToken = (token) => {
    return dispatch => {
    fetch(`http://localhost:4247/api/v1/profile`, {
    method: "GET",
    headers: {
      "Authentication": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.user)
      dispatch(setCurrentUser(data.user))
    })
  }
}

//////////

export const setUserTower = (tower) => {
  return { type: "SET_USER_TOWER", tower}
}

export const settingUserTower = () => {
  return (dispatch, getStore) => {
    fetch(`http://localhost:4247/api/v1/users/${getStore().currentUser.id}`)
    .then(res => res.json())
    .then(user => {
      console.log(user.tower)
      dispatch(setUserTower(user.tower))
      dispatch(setTowerFloors(user.tower.floors))
    })
  }
}

/////////////

export const updateTowerShops = tower => {
  return { type: "UPDATE_TOWER", tower}
}

export const updatingTowerShops = shop => {
  return (dispatch, getStore) => {
    let value = getStore().tower.funds - shop.price
    fetch(`http://localhost:4247/api/v1/towers/${getStore().tower.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ funds: value })
    })
    .then(res => res.json())
    .then(tower => {
      dispatch(updateTowerShops(tower))
    })
  }
}


///////////

export const setTowerFloors = (floors) => {
  return { type: "SET_TOWER_FLOORS", floors}
}

export const addFloor = (floor) => {
  return { type: "ADD_FLOOR", floor}
}

export const addingFloor = (floor) => {
  return (dispatch, getStore) => {
    fetch(`http://localhost:4247/api/v1/floors/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ floor })
    })
    .then(res => res.json())
    .then(floor => {
      console.log(floor)
      dispatch(addFloor(floor))
    })
  }
}

///////////////

export const addShop = (shop) => {
  return { type: "ADD_SHOP", shop }
}

export const addingShop = (shop) => {
  return (dispatch, getStore) => {
    fetch(`http://localhost:4247/api/v1/shops/${shop.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(shop)
    })
    .then(res => res.json())
    .then(shop => {
      dispatch(addShop(shop))
    })
  }
}

export const destroyShop = shop => {
  return { type: "DESTROY_SHOP", shop }
}

export const destroyingShop = shop => {
  return (dispatch, getStore) => {
    fetch(`http://localhost:4247/api/v1/shops/${shop.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ shop_type: "Empty", name: null })
  })
    .then(res => res.json())
    .then(shop => {
      dispatch(destroyShop(shop))
    })
  }
}

////////////

export const setCurrentShop = (shop) => {
  return { type: "CHANGE_MENU", shop }
}

////////////////
