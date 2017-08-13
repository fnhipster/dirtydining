import { combineReducers } from 'redux'

import geolocation from './geolocation'
import map from './map'

export default combineReducers({
  geolocation,
  map
})
