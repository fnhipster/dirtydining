import { 
  SET_RESTAURANT_ID
 } from '../actions/restaurant'

export default (state = {
  selected: null
}, action) => {
  switch (action.type) {
    case SET_RESTAURANT_ID:
      return  {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
