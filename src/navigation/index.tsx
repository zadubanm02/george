import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import HomeTabNavigator from './HomeTabNavigator'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
            <Stack.Screen 
                name={"Home"}
                component={HomeTabNavigator}
                options={{
                    headerShown:false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
