import { combineReducers } from 'redux'

import geolocation from './geolocation'
import region from './region'
import violations from './violations'

export default combineReducers({
  geolocation,
  region,
  violations
})
