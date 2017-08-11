export const SET_GEOLOCATION = 'SET_GEOLOCATION'
export const setGeolocation = payload => ({
  type: SET_GEOLOCATION,
  payload
})

export const WATCH_GEOLOCATION = 'WATCH_GEOLOCATION'
export const watchGeolocation = () => dispatch => {

  return new Promise((resolve, reject) =>
    dispatch({
      type: WATCH_GEOLOCATION,
      id: navigator.geolocation.watchPosition(
        position => resolve(position.coords),
        error => reject(error)
      )
    })
  )

}

export const CLEAR_WATCH_GEOLOCATION = 'CLEAR_WATCH_GEOLOCATION'
export const clearWatchGeolocation = (watchID) => dispatch => {

  dispatch({ type: CLEAR_WATCH_GEOLOCATION })

  return navigator.geolocation.watchPosition(watchID)
}
