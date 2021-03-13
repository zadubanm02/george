import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const AccountItem = () => {
    return (
        <View style={styles.container}>
            <Pressable style={{padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{alignItems:'center', width:75}}>
                        <Icon name='money-bill-wave' color={'#183666'} style={{borderColor:"#F1F3F6", borderWidth:1, padding:15, borderRadius:100}} size={25}/>
                    </View>
                    <View style={{marginHorizontal:20,justifyContent:'flex-start'}}>
                    <Text style={{color:'#557495', textTransform:'uppercase', fontSize:12}}>
                        Space ucet student
                    </Text>
                    <Text style={{fontWeight:'300', fontSize:16, color:'#183666'}}> 
                        Space ucet Student
                    </Text>
                    </View>
                    <View style={{alignItems:"flex-start", justifyContent:'flex-start', marginLeft:20}}>
                        <Text style={{alignSelf:'flex-start', textAlign:'right', fontSize:12, color:'#557495'}}>
                            IBAN ...9080
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{alignItems:'center', width:75}}></View>
                    <View style={{marginLeft:20,padding:5,flex:1,borderBottomColor:'lightgrey', borderBottomWidth:1, flexDirection:'row', justifyContent:'space-between', alignContent:'space-between'}}>
                        <View></View>
                        <View>
                        <Text style={{fontWeight:'700', fontSize:22, color:'#183666'}}>120,00 $</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{alignItems:'center', width:75}}></View>
                    <View style={{marginLeft:20,padding:5,flex:1, flexDirection:'row', justifyContent:'space-between', alignContent:'space-between'}}>
                        <View>
                            <Text style={{fontWeight:'600', color:'#557495'}}>Own resources</Text>
                        </View>
                        <View>
                            <Text style={{color:'#557495'}}>120,00 $</Text>
                        </View>
                    </View>
                </View>
            </Pressable>

            <View style={{backgroundColor:'#F1F3F6', padding:10}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <Text style={{color:'#0864D9', fontWeight:'bold'}}>
                     + New Transfer
                    </Text>
                </View>
                <View style={{flexDirection:'row', marginHorizontal:10}}>
                    <Entypo name="share" color={'#557495'} size={24} style={{marginRight:20}}/>
                    <FontAwesome name="amazon-pay" color={"#557495"} size={24}/>
                </View>
                </View>
                
            </View>
        </View>
    )
}

export default AccountItem


const styles = StyleSheet.create({
    container: {
        borderRadius:5,
        marginHorizontal:10,
        backgroundColor:'#fff',
        borderLeftColor:'yellow',
        borderLeftWidth:6,
        marginTop:30
    }
})