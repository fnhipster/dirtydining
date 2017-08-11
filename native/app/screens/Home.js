import React, { Component } from 'react'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Map } from '../components/Map'

class Home extends Component {

  render() {

    return (
      <Container>
        <Header />
        <Map />
      </Container>
    )

  }
}


export default Home
