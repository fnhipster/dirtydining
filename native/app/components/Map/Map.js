import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MapView from 'react-native-maps'

import styles from './styles'

class Map extends Component {

  render() {
    const { region } = this.props

    return (
      <MapView.Animated
        style={styles.map}
        region={region}
      />
    )
  }
}

Map.propTypes = {
  region: PropTypes.object
}

export default Map
