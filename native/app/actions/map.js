export const SET_MAP_REGION = 'SET_MAP_REGION'
export const setMapRegion = payload => ({
  type: SET_MAP_REGION,
  payload
})

export const SET_MAP_MARKER = 'SET_MAP_MARKER'
export const selectMarker = id => ({
  type: SET_MAP_MARKER,
  payload: { selected: id }
})