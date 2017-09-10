import React, {Component} from 'react'
import {View, Text, TextInput } from 'react-native'

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
                <TextInput style={styles.input} 
                    placeholder='search... '
                />
            </View>
        )
    }
}
