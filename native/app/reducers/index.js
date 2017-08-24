import { combineReducers } from 'redux'

import client from '../config/client'
import geolocation from './geolocation'
import map from './map'

export default combineReducers({
  geolocation,
  map,
  apollo: client.reducer()
})
