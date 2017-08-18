import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import MapView from 'react-native-maps'

import { watchGeolocation, clearWatchGeolocation } from '../../actions/geolocation'
import { setMapRegion } from '../../actions/region'
import { requestViolations, selectViolation } from '../../actions/violations'

import styles from './styles'

class Map extends Component {

  static propTypes = {
    onWatchGeolocation: PropTypes.func,
    onClearWatchGeolocation: PropTypes.func,
    onSelectViolation: PropTypes.func,
    onUpdateRegion: PropTypes.func,
    violations: PropTypes.array,
    region: PropTypes.object,
    geolocation: PropTypes.object,
  }

  componentDidMount() {
    const { onWatchGeolocation, onUpdateRegion } = this.props

    return onWatchGeolocation()
      .then(coords => onUpdateRegion({
        longitude: coords.longitude,
        latitude: coords.latitude
      }))
  }

  componentWillUnmount() {
    const { geolocation, onClearWatchGeolocation } = this.props

    if (geolocation.watcher) onClearWatchGeolocation(geolocation.watcher)
  }

  render() {
    const { violations, region, onUpdateRegion, onSelectViolation } = this.props

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
          onRegionChangeComplete={onUpdateRegion}
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
          { violations.results.map((violation, index) => (
            <MapView.Marker
              key={index}
              coordinate={violation.coords}
              title={violation.name}
              onCalloutPress={() => onSelectViolation(index)}
            >
              <MapView.Callout>
                <Text>💩 {violation.name}</Text>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    )
  }
}


const mapStateToProps = state => {
  const { region, violations } = state
  return { region, violations }
}

const mapDispatchToProps = dispatch => {
  return {
    onWatchGeolocation: () => dispatch(watchGeolocation()),
    onClearWatchGeolocation: (id) => dispatch(clearWatchGeolocation(id)),
    onUpdateRegion: (coords) => {
      dispatch(setMapRegion(coords))
      dispatch(requestViolations(coords))
    },
    onSelectViolation: (id) => dispatch(selectViolation(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Map)


