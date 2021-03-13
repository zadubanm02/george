import React from 'react'
import { StyleSheet, View } from 'react-native'

const Divider = () => {
    return (
        <View style={styles.divider}></View>
    )
}

export default Divider

const styles = StyleSheet.create({
    divider: {
        borderBottomColor:'lightgrey',
        borderBottomWidth:1
    }
})
