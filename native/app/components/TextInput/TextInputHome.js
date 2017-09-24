import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import styles from './styles'

export default class TextInputHome extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Search')}
                    title="Search"
          />
            </View>
        )
    }
}
