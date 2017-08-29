import { combineReducers } from 'redux'

import client from '../config/client'
import geolocation from './geolocation'
import map from './map'
import region from './region'
import restaurant from './restaurant'

export default combineReducers({
  geolocation,
  region,
  map,
  restaurant,
  apollo: client.reducer()
})
