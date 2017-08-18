import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Animated } from 'react-native'
import PropTypes from 'prop-types'

import { VibrancyView } from 'react-native-blur'

import styles from './styles'

class Dialog extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
  }

  state = {
    isOpen: false,
    fadeAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(0.3)
  }

  componentDidMount() {
    this.open()
  }

  open = () => {
    const { onOpen = () => {} } = this.props
    const { fadeAnimation, scaleAnimation } = this.state

    return this.setState({ isOpen: true },
      () => Animated.parallel([
        Animated.timing(fadeAnimation, { toValue: 1, duration: 300 }),
        Animated.spring(scaleAnimation, { toValue: 1, tension: 200, friction: 12 })
      ]).start(onOpen)

    )
  }

  close = () => {
    const { onClose = () => {} } = this.props
    const { fadeAnimation, scaleAnimation } = this.state

    return Animated.parallel([
      Animated.timing(fadeAnimation, { toValue: 0, duration: 250 }),
      Animated.spring(scaleAnimation, { toValue: 0.2, tension: 50, friction: 4 })
    ]).start(() => this.setState({ isOpen: false }, onClose))

  }

  render() {
    const { title, children } = this.props
    const { isOpen, fadeAnimation, scaleAnimation } = this.state

    return isOpen ? (
      <Animated.View 
          style={[
            styles.wrapper,
            { opacity: fadeAnimation }
          ]}
        >
        
        <VibrancyView blurType='dark' blurAmount={4} style={styles.blur} />
            
        <Animated.View style={[
              styles.container,
              { 
                transform: [
                  { scale: scaleAnimation } 
                ]
              }
            ]}>
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
          </Animated.View>
          
      </Animated.View>

    ) : null
  }
}

export default Dialog
