import {
  SET_REGION
} from '../actions/region'

export default (state = {
  latitude: 25.750409,
  longitude: -80.250924,
  latitudeDelta: 0.011665610472313404,
  longitudeDelta: 0.00804662778280374
}, action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
