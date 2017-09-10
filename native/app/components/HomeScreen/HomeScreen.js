import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Dirty Dining</Text>
                <Text style={styles.textSmall}>Where not to eat in Florida</Text>
            </View> 
        )
    }
}

export default HomeScreen 