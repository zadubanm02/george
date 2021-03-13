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
    color:string;
    description: string
}

const StoreItem = ({text, iconType, icon, color, description}:Props) => {
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:10, backgroundColor:color, alignSelf:'center', padding:10, borderRadius:10}}>
            {iconType === 'Fontisto' && <Fontisto name={icon} color={'#fff'} size={50} />}
            {iconType === 'AntDesign' && <AntDesign name={icon} color={'#fff'} size={50} />}
            {iconType === 'Feather' && <Feather name={icon} color={'#fff'} size={50} />}
            {iconType === 'Ionicons' && <Ionicons name={icon} color={'#fff'} size={70} />}
            {iconType === 'FontAwesome5Brands' && <FontAwesome5Brands name={icon} color={'#fff'} size={50} />}
            {iconType === 'MaterialIcons' && <MaterialIcons name={icon} color={'#fff'} size={50} />}
            </View>
            <View style={{ justifyContent:'center', flexShrink:1}}>
            <Text style={{fontSize:16, color:'#557495', fontWeight:'bold', margin:5}}>{text}</Text>
            <Text style={{color:'#557495', margin:5}}>{description}</Text>
            </View>
        </View>
    )
}

export default StoreItem


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:10,
        fontSize:18,
        width:300,
        backgroundColor:'#fff',
        borderRadius:10,
        height:130
    }
})