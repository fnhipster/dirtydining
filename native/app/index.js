import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

EStyleSheet.build({
  $primaryColor: '#58D68D',

  $white: '#ffffff',
  $border: '#E2E2E2',
  $text: '#454545',
})

export default () => <Home />