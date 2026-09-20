import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global'
const Block = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default Block

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#233D4D',
        marginTop: 70,
        justifyContent: 'center',
        width: 1000
    }
})