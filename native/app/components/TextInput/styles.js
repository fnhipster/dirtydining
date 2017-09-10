import EStyleSheet from 'react-native-extended-stylesheet'
import StyleSheet from 'react-native'

const INPUT_HEIGHT = 30
const BORDER_RADIUS = 3

export default EStyleSheet.create({
    container: {
        width: '70%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        backgroundColor: '$white',
    },
    input: {
        height: INPUT_HEIGHT,
        fontSize: 16,
        paddingHorizontal: 18,
    },
});