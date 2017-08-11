import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'

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
    const { map, setMapRegion } = this.props

    return (
      <MapView
        showsUserLocation={true}
        style={styles.map}
        region={map}
        onRegionChangeComplete={setMapRegion}
      >
      </MapView>
    )
  }
}

Map.propTypes = {
  setMapRegion: PropTypes.func,
  watchGeolocation: PropTypes.func,
  clearWatchGeolocation: PropTypes.func,
  map: PropTypes.object,
  geolocation: PropTypes.object
}

const mapStateToProps = state => {
  const { geolocation, map } = state
  return { geolocation, map }
}

const mapDispatchToProps = dispatch => {
  return {
    watchGeolocation: () => dispatch(watchGeolocation()),
    clearWatchGeolocation: (watchID) => dispatch(clearWatchGeolocation(watchID)),
    setMapRegion: (coords) => dispatch(setMapRegion(coords))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
