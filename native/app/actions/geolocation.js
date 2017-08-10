export const GET_GEOLOCATION = 'GET_GEOLOCATION'

const setGeolocation = payload => ({
  type: GET_GEOLOCATION,
  payload
})

export const getGeolocation = () => dispatch => {
  navigator.geolocation.getCurrentPosition(
    position => dispatch(
      setGeolocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 1.5,
        longitudeDelta: 0.00421 * 1.5
      })
    )
  )
}
