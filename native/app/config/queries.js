import { gql } from 'react-apollo'

export const QUERY_GET_RESTAURANTS = gql`
  query restaurantsByLocation($latitude: Float!, $longitude: Float!, $latitudeDelta: Float!, $longitudeDelta: Float!) {
    restaurants(latitude: $latitude, longitude: $longitude, latitudeDelta: $latitudeDelta, longitudeDelta: $longitudeDelta) {
      id,
      business_name,
      location_latitude,
      location_longitude
    }
  }
`

export const QUERY_GET_RESTAURANT = gql`
  query restaurantById($id: ID!) {
    restaurant(id: $id) {
      business_name,
      inspections {
        inspection_date,
        total_violations,
        violations {
          is_primary_concern,
          is_risky_factor,
          description
        }
      }
    }
  }
`