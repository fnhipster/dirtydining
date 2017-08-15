import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import MapView from 'react-native-maps'

import { requestViolations, selectViolation  } from '../../actions/violations'
import { setMapRegion } from '../../actions/map'
import { watchGeolocation, clearWatchGeolocation } from '../../actions/geolocation'

import styles from './styles'

class Map extends Component {
  
  componentDidMount() {
    const { watchGeolocation, setMapRegion } = this.props
    return watchGeolocation()
      .then(coords => setMapRegion({
        longitude: coords.longitude,
        latitude: coords.latitude
      }))
  }

  componentWillUnmount() {
    const { geolocation, clearWatchGeolocation } = this.props
    if (geolocation.watcher) clearWatchGeolocation(geolocation.watcher)
  }

  render() {
    const { map, violations, setMapRegion, selectViolation } = this.props

    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          style={styles.map}
          region={map}
          onRegionChangeComplete={setMapRegion}
        >
          { violations.results.map((violation, index) => (
            <MapView.Marker
              key={index}
              coordinate={violation.coords}
              title={violation.name}
              onCalloutPress={() => selectViolation(index)}
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

Map.propTypes = {
  setMapRegion: PropTypes.func,
  watchGeolocation: PropTypes.func,
  clearWatchGeolocation: PropTypes.func,
  selectViolation: PropTypes.func,
  map: PropTypes.object,
  geolocation: PropTypes.object,
  violations: PropTypes.object
}

const mapStateToProps = state => {
  const { geolocation, map, violations } = state
  return { geolocation, map, violations }
}

const mapDispatchToProps = dispatch => {
  return {
    watchGeolocation: () => dispatch(watchGeolocation()),
    clearWatchGeolocation: (watchID) => dispatch(clearWatchGeolocation(watchID)),
    setMapRegion: (coords) => dispatch(setMapRegion(coords)) && dispatch(requestViolations(coords)),
    selectViolation: (id) => dispatch(selectViolation(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
