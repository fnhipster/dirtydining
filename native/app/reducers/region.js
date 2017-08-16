import { SET_MAP_REGION } from '../actions/region'

export default (state = {
  latitude: 27.6648,
  longitude: 81.5158,
  latitudeDelta: 0.011665610472313404,
  longitudeDelta: 0.00804662778280374
}, action) => {
  switch (action.type) {
    case SET_MAP_REGION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
