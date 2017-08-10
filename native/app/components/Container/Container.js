import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

export default class Container extends Component {

  render() {
    const { children } = this.props

    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
  
}