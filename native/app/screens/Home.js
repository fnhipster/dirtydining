import React, { Component } from 'react'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { ViolationDetails } from '../components/ViolationDetails'

class Home extends Component {

  render() {

    return (
      <Container>
        <Header />
        <Map />
        <ViolationDetails />
      </Container>
    )

  }
}


export default Home
