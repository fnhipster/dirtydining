import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import { Dialog } from '../Dialog'

import { selectViolation } from '../../actions/violations'

class Map extends Component {

  render() {
    const { violations, onClose } = this.props
    const violation = violations.results[violations.selectedIndex]

    return violation ? (
      <Dialog
        title={violation.name}
        onClose={onClose}
      >
        <Text>{violation.description}</Text>
      </Dialog>
    ) : null
  }
}

Map.propTypes = {
  violations: PropTypes.object,
  onClose: PropTypes.func,
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
