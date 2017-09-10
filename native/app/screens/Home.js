import React, { Component } from 'react'
import { View, StatusBar, Image } from 'react-native'

import { Container } from '../components/Container'
import { HomeScreen } from '../components/HomeScreen'
import { TextInputHome } from '../components/TextInput'


class Home extends Component {
  render() {
    return (
      <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Image 
        source={require('../images/background-home.png')} 
          style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center'}}>
          <HomeScreen />
      <TextInputHome />          
      </Image>
    </Container>
    );
  }
}

export default Home