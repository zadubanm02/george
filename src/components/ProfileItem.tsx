import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

interface Props {
    text: string;
    iconType: string;
    icon: string;
}

const ProfileItem = ({text, iconType, icon}:Props) => {
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:10}}>
            {iconType === 'Fontisto' && <Fontisto name={icon} color={'#557495'} size={25} />}
            {iconType === 'AntDesign' && <AntDesign name={icon} color={'#557495'} size={25} />}
            {iconType === 'Feather' && <Feather name={icon} color={'#557495'} size={25} />}
            {iconType === 'Ionicons' && <Ionicons name={icon} color={'#557495'} size={25} />}
            {iconType === 'FontAwesome5Brands' && <FontAwesome5Brands name={icon} color={'#557495'} size={25} />}
            {iconType === 'MaterialIcons' && <MaterialIcons name={icon} color={'#557495'} size={25} />}
            </View>
            <Text style={{fontSize:16, color:'#557495'}}>{text}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:20,
        fontSize:18
    }
})