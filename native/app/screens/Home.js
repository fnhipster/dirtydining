import React, { Component } from 'react'
import { View, Image } from 'react-native'

import images from '../config/images'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Image source={images.logo} />
      </View>
    )
  }
}
