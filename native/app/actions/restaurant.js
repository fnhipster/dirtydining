export const SET_RESTAURANT_ID = 'SET_RESTAURANT_ID'
export const selectRestaurantByID = id => ({
  type: SET_RESTAURANT_ID,
  payload: {
    id
  }
})