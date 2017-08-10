import { GET_GEOLOCATION } from '../actions/geolocation'

export default (state = null, action) => {
  switch(action.type) {
    case GET_GEOLOCATION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}