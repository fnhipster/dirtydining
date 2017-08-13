import {
  SET_GEOLOCATION,
  WATCH_GEOLOCATION,
  CLEAR_WATCH_GEOLOCATION
} from '../actions/geolocation'

export default (state = {
  latitude: 25.794624,
  longitude: -80.206339,
}, action) => {
  switch (action.type) {
    case WATCH_GEOLOCATION:
      return {
        ...state,
        watcher: action.id
      }
    case CLEAR_WATCH_GEOLOCATION:
      return {
        ...state,
        watcher: null
      }
    case SET_GEOLOCATION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
