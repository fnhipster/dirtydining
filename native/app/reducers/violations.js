import { SET_VIOLATIONS, SELECT_VIOLATION } from '../actions/violations'

export default (state = {
  results: [],
  selectedIndex: null
}, action) => {
  switch (action.type) {
    case SET_VIOLATIONS:
      return {
        ...state,
        results: [ ...action.results ],
      }
    case SELECT_VIOLATION:
      return {
        ...state,
        selectedIndex: action.selectedIndex
      }
    default:
      return state
  }
}
