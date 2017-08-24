import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setMapRegion } from '../../actions/map'

import styles from './styles'

class Header extends Component {

  static propTypes = {
    setMapRegion: PropTypes.func,
    geolocation: PropTypes.object
  }

  handlePressGetLocation = () => {
    const { geolocation, setMapRegion } = this.props

    return setMapRegion({
      latitude: geolocation.latitude,
      longitude: geolocation.longitude
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.buttonLocation}
          onPress={this.handlePressGetLocation}
          title="Center Map"
          color="#FFFFFF"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }

}

const mapStateToProps = state => {
  const { geolocation } = state
  return { geolocation }
}

const mapDispatchToProps = dispatch => {
  return {
    setMapRegion: region => {
      dispatch(setMapRegion(region))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
