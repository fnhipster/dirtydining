import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './styles'

class Container extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props

    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }

}

export default Container
