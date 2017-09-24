import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { AppRegistry, View, StatusBar, Image } from 'react-native'

import { Container } from '../components/Container'
import { HomeScreen } from '../components/HomeScreen'
import { SearchButton } from '../components/Button'


export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleSearchPress = () => {
  // const { navigate } = this.props.navigation;
    
    this.props.navigation.navigate('Search');
  }; 

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
      <SearchButton onPress={this.handleSearchPress} />          
      </Image>
    </Container>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);