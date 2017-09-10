import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { debounce } from '../lib/toolkit'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { ViolationDetails } from '../components/ViolationDetails'

import { watchGeolocation, clearWatchGeolocation } from '../actions/geolocation'
import { setMapRegion } from '../actions/map'
import { setRegion } from '../actions/region'
import { selectRestaurantByID } from '../actions/restaurant'

class Home extends Component {

  static propTypes = {
    geolocation: PropTypes.object,
    map: PropTypes.object,
    region: PropTypes.object,
    restaurant: PropTypes.object,
    onWatchGeolocation: PropTypes.func,
    onClearWatchGeolocation: PropTypes.func,
    onRegionChange: PropTypes.func,
    onRegionChangeData: PropTypes.func,
    onCalloutPress: PropTypes.func,
    onViolationDetailsClose: PropTypes.func
  }

  componentDidMount() {
    const { onWatchGeolocation, onRegionChange } = this.props

    return onWatchGeolocation()
      .then(coords => onRegionChange({
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
      region,
      restaurant,
      onRegionChange,
      onRegionChangeData,
      onCalloutPress,
      onViolationDetailsClose
    } = this.props

    return (
      <Container>
        
        <Header /> 

        <Map 
          region={region}
          map={map} 
          onRegionChange={debounce(onRegionChangeData, 1500)}
          onRegionChangeComplete={onRegionChange}
          onCalloutPress={onCalloutPress}
        />
        

        { restaurant.id && 
          <ViolationDetails 
            id={restaurant.id} 
            onClose={onViolationDetailsClose}
          /> 
        }

      </Container>
    )

  }
}

const mapStateToProps = state => {
  const { map, region, restaurant, geolocation } = state
  return { map, region, restaurant, geolocation }
}

const mapDispatchToProps = dispatch => {
  return {
    onWatchGeolocation: () => dispatch(watchGeolocation()),
    onClearWatchGeolocation: (id) => dispatch(clearWatchGeolocation(id)),
    onRegionChange: (coords) => dispatch(setMapRegion(coords)),
    onRegionChangeData: (coords) => dispatch(setRegion(coords)),
    onCalloutPress: (index) => dispatch(selectRestaurantByID(index)),
    onViolationDetailsClose: () => dispatch(selectRestaurantByID(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
