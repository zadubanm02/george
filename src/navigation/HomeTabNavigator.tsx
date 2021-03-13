import React from 'react'
import {View} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import StoreScreen from '../screens/StoreScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ContactScreen from '../screens/ContactScreen'

const Tab = createBottomTabNavigator() 

const HomeTabNavigator = () => {
    return (
       <Tab.Navigator tabBarOptions={{
           activeTintColor:'#0864D9'
       }}>
           <Tab.Screen
            name={"Overview"}
            component={HomeScreen}
            options={{
                tabBarIcon:({color}) => 
                    <Fontisto name="search" size={25} color={color}/>
            }}
           />
           <Tab.Screen
            name={"Store"}
            component={StoreScreen}
            options={{
                tabBarIcon:({color}) => 
                    <EvilIcons name="cart" size={25} color={color}/>
                
            }}
           />
           <Tab.Screen
            name={"Contact"}
            component={ContactScreen}
            options={{
                tabBarIcon:({color}) =>
                <Feather name="message-square" size={25} color={color}/>
            }}
           />
           <Tab.Screen
            name={"Profile"}
            component={ProfileScreen}
            options={{
                tabBarIcon:({color}) =>
                <Feather name="user" size={25} color={color}/>
            }}
           />
       </Tab.Navigator>
    )
}

export default HomeTabNavigator