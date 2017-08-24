import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { ViolationDetails } from '../components/ViolationDetails'

import { watchGeolocation, clearWatchGeolocation } from '../actions/geolocation'
import { setMapRegion, selectMarker } from '../actions/map'

class Home extends Component {

  static propTypes = {
    geolocation: PropTypes.object,
    map: PropTypes.object,
    onWatchGeolocation: PropTypes.func,
    onClearWatchGeolocation: PropTypes.func,
    onRegionChangeComplete: PropTypes.func,
    onCalloutPress: PropTypes.func,
    onViolationDetailsClose: PropTypes.func
  }

  componentDidMount() {
    const { onWatchGeolocation, onRegionChangeComplete } = this.props

    return onWatchGeolocation()
      .then(coords => onRegionChangeComplete({
        longitude: coords.longitude,
        latitude: coords.latitude
      }))
  }

  componentWillUnmount() {
    const { geolocation, onClearWatchGeolocation } = this.props

    if (geolocation.watcher) onClearWatchGeolocation(geolocation.watcher)
  }

  render() {
    const {
      map,
      onRegionChangeComplete,
      onCalloutPress,
      onViolationDetailsClose
    } = this.props

    return (
      <Container>
        
        <Header /> 

        <Map 
          region={map.region} 
          onRegionChangeComplete={onRegionChangeComplete}
          onCalloutPress={onCalloutPress}
        />

        { map.selected && 
          <ViolationDetails 
            id={map.selected} 
            onClose={onViolationDetailsClose}
          /> 
        }

      </Container>
    )

  }
}

const mapStateToProps = state => {
  const { map, geolocation } = state
  return { map, geolocation }
}

const mapDispatchToProps = dispatch => {
  return {
    onWatchGeolocation: () => dispatch(watchGeolocation()),
    onClearWatchGeolocation: (id) => dispatch(clearWatchGeolocation(id)),
    onRegionChangeComplete: (coords) => dispatch(setMapRegion(coords)),
    onCalloutPress: (index) => dispatch(selectMarker(index)),
    onViolationDetailsClose: () => dispatch(selectMarker(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
