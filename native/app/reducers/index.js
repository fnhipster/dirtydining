import { combineReducers } from 'redux'

import geolocation from './geolocation'
import map from './map'
import violations from './violations'

export default combineReducers({
  geolocation,
  map,
  violations
})
