import { SET_GEOLOCATION } from '../actions/geolocation'

export default (state = null, action) => {
  switch(action.type) {
    case SET_GEOLOCATION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}