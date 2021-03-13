import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Divider from '../components/Divider'
import ProfileItem from '../components/ProfileItem'

const ProfileScreen = () => {
    return (
        <ScrollView>
        <View style={styles.header}>
           <Text style={{alignSelf:'flex-end', margin:10, color:'#fff', fontWeight:'bold'}}>Log out</Text>
           <View style={styles.headerContent}>
               <View style={{backgroundColor:'#1F3D6B', padding:30, borderRadius:100, margin:10}}>
               <Feather name="user" size={50} color={'#fff'}/>
               </View>
               <View style={{backgroundColor:'#fff', padding:10, borderRadius:50, position:'absolute', top:30, left:230}}>
               <Feather name="camera" size={30} color="#1F3D6B" />
               </View>
               <Text style={{color:'#fff', fontWeight:'bold', fontSize:24}}>Michal Zaduban</Text>
           </View>
        </View>
        <Text style={{marginHorizontal:20, marginTop:10, color:'#1F3D6B', fontWeight:'bold'}}>Extras</Text>
        <ProfileItem text={'Currency converter'} iconType={"Fontisto"} icon={'arrow-swap'}/>
        <Divider />
        <Text style={{marginHorizontal:20, marginTop:10, color:'#1F3D6B', fontWeight:'bold'}}>Settings</Text>
        <ProfileItem text={'Settings'} iconType={"AntDesign"} icon={'setting'}/>
        <ProfileItem text={'Your products'} iconType={"Feather"} icon={'layers'}/>
        <ProfileItem text={'Notifications'} iconType={"Fontisto"} icon={'bell'}/>
        <Divider />
        <Text style={{marginHorizontal:20, marginTop:10, color:'#1F3D6B', fontWeight:'bold'}}>About</Text>
        <ProfileItem text={'Information'} iconType={"Ionicons"} icon={'information-circle-outline'}/>
        <ProfileItem text={'Security check'} iconType={"Ionicons"} icon={'md-shield-checkmark-outline'}/>
        <Divider />
        <Text style={{marginHorizontal:20, marginTop:10, color:'#1F3D6B', fontWeight:'bold'}}>More apps</Text>
        <View style={{ flexDirection:'row',
        marginHorizontal:10,
        marginVertical:20,
        alignItems:'center'
        }}>
            <View style={{marginHorizontal:10, alignItems:'center'}}>
                <FontAwesome name={'google'} color={'#557495'} size={25} />
            </View>
            <View style={{justifyContent:'center', alignItems:'center', marginHorizontal:10}}>
            <Text style={{fontSize:16, color:'#557495'}}>Google Pay</Text>
            <Text style={{fontSize:12, color:'#557495'}}>Pay smarter</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default ProfileScreen


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