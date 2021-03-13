import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Divider from '../components/Divider'
import ProfileItem from '../components/ProfileItem'

const ContactScreen = () => {
    return (
        <ScrollView>
        <View style={styles.header}>
           <Text style={{alignSelf:'center', margin:10, color:'#fff', fontWeight:'bold'}}>Contact</Text>
           <View style={styles.headerContent}>
               <View style={{backgroundColor:'#1F3D6B', padding:30, borderRadius:100, margin:10}}>
               <Feather name="message-circle" size={70} color={'#fff'}/>
               </View>
           </View>
        </View>
        <ProfileItem text={'ATM and branch finder'} iconType={"Ionicons"} icon={'location-outline'}/>
        <ProfileItem text={'Requests'} iconType={"Feather"} icon={'folder'}/>
        <ProfileItem text={'Call client centre'} iconType={"Ionicons"} icon={'call-outline'}/>
        <ProfileItem text={'Call client centre from abroad'} iconType={"Ionicons"} icon={'call-outline'}/>
        <ProfileItem text={'Call via skype'} iconType={"Ionicons"} icon={'call-outline'}/>
        <ProfileItem text={'Send email'} iconType={"MaterialIcons"} icon={'alternate-email'}/>
        <Divider />
        <Text style={{marginHorizontal:20, marginTop:10, color:'#1F3D6B', fontWeight:'bold'}}>Visit social networks</Text>
        <ProfileItem text={'Facebook'} iconType={"FontAwesome5Brands"} icon={'facebook'}/>
        <ProfileItem text={'Instagram'} iconType={"FontAwesome5Brands"} icon={'instagram'}/>
        </ScrollView>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container:{

    },
    header:{
        height:250,
        backgroundColor:"#0864D9"
    },
    headerContent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})