import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { View, Text } from 'react-native'

import MapView from 'react-native-maps'

import { QUERY_GET_RESTAURANTS } from '../../config/queries'

import styles from './styles'

const Map = ({
  data: { restaurants, loading, error },
  onRegionChangeComplete,
  onCalloutPress,
  region
}) => {

  if (error) return null

  else if (!restaurants) return null
  
  return (
    <View style={styles.container}>
      <MapView
        region={region}
        cacheEnabled={false}
        followsUserLocation={false} // iOS only
        liteMode={false} // Android only
        loadingEnabled={true}
        maxZoomLevel={20}
        minZoomLevel={10}
        moveOnMarkerPress={true} // Android only
        onRegionChangeComplete={onRegionChangeComplete}
        pitchEnabled={false}
        rotateEnabled={true}
        scrollEnabled={true}
        showsBuildings={true}
        showsCompass={false}
        showsIndoorLevelPicker={false}
        showsIndoors={true}
        showsMyLocationButton={false}
        showsPointsOfInterest={true}
        showsScale={false}
        showsTraffic={false}
        showsUserLocation={true}
        style={styles.map}
        toolbarEnabled={false} // Android only
        zoomEnabled={true}
      >
        { restaurants.map((restaurant, index) => (
          <MapView.Marker
            key={index}
            coordinate={{
              latitude: restaurant.location_latitude,
              longitude: restaurant.location_longitude
            }}
            title={restaurant.business_name}
            onCalloutPress={() => onCalloutPress(restaurant.id)}
          >
            <MapView.Callout>
              <Text>💩 {restaurant.business_name}</Text>
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    </View>
  )

}

Map.propTypes = {
  data: PropTypes.shape({
    restaurants: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }),
  region: PropTypes.object,
  onCalloutPress: PropTypes.func,
  onRegionChangeComplete: PropTypes.func,
}


export default graphql(QUERY_GET_RESTAURANTS, {
  options: ({ region }) => ({
    variables: {
      lat: region.latitude,
      lon: region.longitude
    }
  })
})(Map)