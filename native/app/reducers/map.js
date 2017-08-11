import { SET_MAP_REGION } from '../actions/map'

export default (state = {
  latitude: 25.794624,
  longitude: -80.206339,
  latitudeDelta: 0.011665610472313404,
  longitudeDelta: 0.00804662778280374
}, action) => {
  switch (action.type) {
    case SET_MAP_REGION:
      // return Object.assign({}, state, action.payload)
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
