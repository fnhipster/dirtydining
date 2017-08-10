import { SET_GEOLOCATION } from '../actions/geolocation'

export default (state = {
  latitude: 25.728156,
  longitude: -80.24128429999996,
  latitudeDelta: 0.00922 * 1.5,
  longitudeDelta: 0.00421 * 1.5
}, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
