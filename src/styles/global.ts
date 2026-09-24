import { StyleSheet } from 'react-native'
import colors from '@/styles/colors'
export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        alignItems: 'center',
    },
    title:{
        color: colors.text,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    primary:{
        color: colors.primary,
        fontWeight: 'bold'
    },
    secondTitle:{
        color: colors.textsSecondary,
        fontSize: 18,
        marginTop:20
    },
    button:{
        backgroundColor: colors.primary,
        width: 320,
        borderRadius: 15,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
})