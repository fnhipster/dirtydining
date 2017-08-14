import React, { Component } from 'react'
import { Text } from 'react-native'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { Dialog } from '../components/Dialog'

class Home extends Component {

  render() {

    return (
      <Container>
        <Header />
        <Map />
        <Dialog
          title='Hello, Goodbye'
          >
          <Text>Hello, hello...</Text>
        </Dialog>
      </Container>
    )

  }
}


export default Home
