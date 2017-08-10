export const SET_GEOLOCATION = 'SET_GEOLOCATION'
const setGeolocation = payload => ({
  type: SET_GEOLOCATION,
  payload
})

export const GET_GEOLOCATION = 'GET_GEOLOCATION'
export const getGeolocation = () => dispatch => {
  navigator.geolocation.getCurrentPosition(position => {

    const payload = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    }

    dispatch({
      type: GET_GEOLOCATION
    })

    return dispatch(setGeolocation(payload))
  })
  
}
