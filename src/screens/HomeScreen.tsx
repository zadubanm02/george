import React from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AccountItem from '../components/AccountItem'

const HomeScreen = () => {
    return (
        <LinearGradient style={{flex:1}} colors={['#0864D9', '#AAD1EE' ]}>

       <View>
           <AccountItem />
       </View>
       </LinearGradient>
    )
}

export default HomeScreen
