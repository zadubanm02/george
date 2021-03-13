import React from 'react'
import { ScrollView, View, StyleSheet, Text, useWindowDimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Divider from '../components/Divider'
import ProfileItem from '../components/ProfileItem'
import StoreItem from '../components/StoreItem'

const StoreScreen = () => {
    const width = useWindowDimensions().width
    return (
        <ScrollView>
        <View style={styles.header}>
           <View style={styles.headerContent}>
           <Text style={{alignSelf:'flex-start', marginTop:10,marginHorizontal:20, color:'#fff', fontWeight:'bold', fontSize:20}}>Vybral som pre vas</Text>
               <ScrollView horizontal style={{ margin:10}} 
                showsHorizontalScrollIndicator={false}
                snapToInterval={width-120}
                snapToAlignment={'center'}
                decelerationRate={"fast"} >
                    <StoreItem color={"#7506c9"} text={'Financny plan'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost "}/>
                    <StoreItem color={"#3a0066"} text={'Financny plan'} iconType={"Ionicons"} icon={'bicycle-sharp'} description={"Zabezpecte si svoju istejsiu buducnost Zabezpecte si svoju istejsiu buducnost"}/>
                </ScrollView>
           </View>
        </View>
        <Text style={{alignSelf:'flex-start', marginTop:10,marginHorizontal:20, color:'#1F3D6B', fontWeight:'bold', fontSize:20}}>Financovanie</Text>
        <ScrollView horizontal style={{ margin:10}} 
                showsHorizontalScrollIndicator={false}
                snapToInterval={width-120}
                snapToAlignment={'center'}
                decelerationRate={"fast"} >
                    <View>
                    <StoreItem color={"#850031"} text={'Spotrebny uver'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                    <StoreItem color={"#097d01"} text={'Prenos pozicky'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                    </View>
                </ScrollView>
                
                <View style={{margin:20}}>
                    <Divider/>
                </View>
            <Text style={{alignSelf:'flex-start', marginTop:10,marginHorizontal:20, color:'#1F3D6B', fontWeight:'bold', fontSize:20}}>Ucty a karty</Text>
            <ScrollView horizontal style={{ margin:10}} 
                showsHorizontalScrollIndicator={false}
                snapToInterval={width-120}
                snapToAlignment={'center'}
                decelerationRate={"fast"} >
                <View>
                <StoreItem color={"#e60256"} text={'Zalozenie uctu'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                <StoreItem color={"#857101"} text={'Nova karta k uctu'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                </View>
                <View>
                <StoreItem color={"#b9c902"} text={'Povolene precerpanie'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                <StoreItem color={"#7506c9"} text={'Stedra karta'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                </View>
                </ScrollView>
                <View style={{margin:20}}>
                    <Divider/>
                </View>
            <Text style={{alignSelf:'flex-start', marginTop:10,marginHorizontal:20, color:'#1F3D6B', fontWeight:'bold', fontSize:20}}>Investicie</Text>
            <ScrollView horizontal style={{ margin:10}} 
                showsHorizontalScrollIndicator={false}
                snapToInterval={width-120}
                snapToAlignment={'center'}
                decelerationRate={"fast"} >
                <View>
                <StoreItem color={"#002999"} text={'Fond max. vynosov'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                <StoreItem color={"#02a19b"} text={'Aktivne portfolio'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                </View>
                <View>
                <StoreItem color={"#800600"} text={'Majetkovy ucet'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                </View>
                </ScrollView>
                <View style={{margin:20}}>
                    <Divider/>
                </View>
            <Text style={{alignSelf:'flex-start', marginTop:10,marginHorizontal:20, color:'#1F3D6B', fontWeight:'bold', fontSize:20}}>Poistenie</Text>
            <ScrollView horizontal style={{ margin:10}} 
                showsHorizontalScrollIndicator={false}
                snapToInterval={width-120}
                snapToAlignment={'center'}
                decelerationRate={"fast"} >
                <View>
                <StoreItem color={"#cf0c02"} text={'Poistenie veci a karty'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                <StoreItem color={"#7506c9"} text={'Osobna poistka'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                </View>
                <View>
                <StoreItem color={"#04dbd8"} text={'Cestovne poistenie'} iconType={"Ionicons"} icon={'information-circle-outline'} description={"Zabezpecte si svoju istejsiu buducnost"}/>
                </View>
                </ScrollView>
        </ScrollView>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    container:{

    },
    header:{
        height:250,
        backgroundColor:"#0864D9"
    },
    headerContent:{
        flex:1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    }
})