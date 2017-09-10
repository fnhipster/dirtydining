import EStyleSheet from 'react-native-extended-stylesheet'


export default EStyleSheet.create({
    container: {
        alignItems: 'center',        
    },
    textTitle: {
        fontWeight: '600',
        fontSize: 32,
        letterSpacing: -0.5,
        color: '$white',
        padding: 10,          
    },
    textSmall: {
        fontSize: 16,
        color: '$white',
        textAlign: 'center',
        paddingBottom: 35,                    
    },
})