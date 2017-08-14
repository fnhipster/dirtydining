import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Animated } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

class Dialog extends Component {

  state = {
    isOpen: false,
    fadeAnimation: new Animated.Value(0)
  }

  componentDidMount() {
    this.open()
  }

  open = () => {
    const { onOpen = () => {} } = this.props
    const { fadeAnimation } = this.state

    return this.setState({ isOpen: true },
      () => Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 500
      }).start(onOpen))
  }

  close = () => {
    const { onClose = () => {} } = this.props
    const { fadeAnimation } = this.state

    return Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 500
    }).start(() => this.setState({ isOpen: false }, onClose))
  }

  render() {
    const { title, children } = this.props
    const { isOpen, fadeAnimation } = this.state

    return isOpen ? (
      <Animated.View style={[
        styles.wrapper,
        { opacity: fadeAnimation }
      ]}>
        <View style={styles.container}>
          { title &&
            <View style={styles.header}>
              <Text style={styles.textTitle}>{title}</Text>
            </View>
          }
          <View style={styles.body}>
            {children}
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.buttonClose} onPressOut={this.close}>
              <Text style={styles.textClose}>CLOSE</Text>
            </TouchableOpacity>
          </View>
      </View>
     </Animated.View>
    ) : null
  }
}

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
}

export default Dialog