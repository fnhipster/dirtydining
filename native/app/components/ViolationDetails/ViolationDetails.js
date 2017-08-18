import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Image, Text } from 'react-native'

import { Dialog } from '../Dialog'

import { selectViolation } from '../../actions/violations'

import styles from './styles'

import images from '../../config/images'

class Map extends Component {

  static propTypes = {
    violations: PropTypes.object,
    onClose: PropTypes.func
  }

  render() {
    const { violations, onClose } = this.props
    const violation = violations.results[violations.selectedIndex]

    return violation ? (
      <Dialog
        title={violation.name}
        onClose={onClose}
      >
        
        <Image style={styles.imageCategory} source={images.categoryTest} />
        <Text style={styles.textDescription}>{violation.description}</Text>
      </Dialog>
    ) : null
  }
}

const mapStateToProps = state => {
  const { violations } = state
  return { violations }
}

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(selectViolation(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
