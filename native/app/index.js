import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { AppRegistry, View } from 'react-native'

import Home from './screens/Home'
import HomeStack from './config/routes'

EStyleSheet.build({
  $primaryColor: '#58D68D',

  $white: '#ffffff',
  $border: '#E2E2E2',
  $text: '#454545',

})

export default Home
