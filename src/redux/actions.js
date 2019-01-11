const setCurrentUser = (user) => {
  return { type: "SET_CURRENT_USER", user}
}

const settingCurrentUser = (user) => {
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

const checkingToken = (token) => {
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

const setUserTower = (tower) => {
  return { type: "SET_USER_TOWER", tower}
}

const settingUserTower = () => {
  return (dispatch, getStore) => {
    fetch(`http://localhost:4247/api/v1/users/${getStore().currentUser.id}`)
    .then(res => res.json())
    .then(user => {
      console.log(user.tower)
      dispatch(setUserTower(user.tower))
      dispatch(setTowerFloors(user.tower.floors))

      // let shopSubArr = user.tower.floors.map( floor => {
      //   return floor.shops
      // })
      // let shops = shopSubArr.flat()
      // dispatch(setTowerShops(shops))
    })
  }
}

///////////

const setTowerFloors = (floors) => {
  return { type: "SET_TOWER_FLOORS", floors}
}

const addFloor = (floor) => {
  return { type: "ADD_FLOOR", floor}
}

const addingFloor = (floor) => {
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

const addShop = (shop) => {
  return { type: "ADD_SHOP", shop }
}

const addingShop = (shop) => {
  return (dispatch, getStore) => {
    fetch(`http://localhost:4247/api/v1/shops/${shop.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ shop_type: shop.type, name: shop.name })
    })
    .then(res => res.json())
    .then(shop => {
      dispatch(addShop(shop))
    })
  }
}

export { setCurrentUser, settingCurrentUser, checkingToken, settingUserTower, addingFloor, addingShop}
