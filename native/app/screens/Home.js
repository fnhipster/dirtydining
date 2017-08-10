import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getGeolocation } from '../actions/geolocation'

import { Container } from '../components/Container'
import { Map } from '../components/Map'

class Home extends Component {

  componentDidMount() {
    const { getGeolocation } = this.props
    getGeolocation()
  }

  render() {

    const { geolocation } = this.props

    return (
      <Container>
        <Map region={geolocation} />
      </Container>
    )

  }
}

Home.propTypes = {
  getGeolocation: PropTypes.func,
  geolocation: PropTypes.object
}

// Redux Connect

const mapStateToProps = state => {
  const { geolocation } = state
  return { geolocation }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeolocation: () => dispatch(getGeolocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
