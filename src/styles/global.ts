import { StyleSheet } from 'react-native'

export const colors = {
    background: "#000000",
    header: "#233D4D",
    primary: "#FE7F2D",
    text: "#EAECF0",
    textsSecondary: "#d0d2d7"
}

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        alignItems: 'center',
        margin: 0
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