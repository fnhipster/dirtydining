import { 
  SET_MAP_MARKER,
  SET_MAP_REGION
 } from '../actions/map'

export default (state = {
  region: {
    latitude: 25.750409,
    longitude: -80.250924,
    latitudeDelta: 0.011665610472313404,
    longitudeDelta: 0.00804662778280374
  },
  selectedMarker: null
}, action) => {
  switch (action.type) {
    case SET_MAP_MARKER:
      return {
        ...state,
        ...action.payload
      }
    case SET_MAP_REGION:
      return {
        ...state,
        region: {
          ...state.region,
          ...action.payload
        }
        
      }
    default:
      return state
  }
}
