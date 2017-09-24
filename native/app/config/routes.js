import { StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Search from '../screens/Search'


const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
        header: () => null,
        },
    },
    Search: {
        screen: Search,
        navigationOptions: {
        headerTitle: 'Search',
        },  
    }
})
    
export default HomeStack;