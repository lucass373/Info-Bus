import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../types";

export default function LinhaScreen({ navigation }: RootTabScreenProps<'LinhaScreen'>){   
    return(
    <View style={styles.container} >
    <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')} style={styles.itemView}>
        <Text style={{fontSize: 30}}>413M</Text>
        <Text style={{fontSize:30}}>V. Das Pedras x Niterói</Text>
        </TouchableOpacity>
        <View style={styles.itemView}>
        <Text style={{fontSize: 30}}>728M</Text>
        <Text style={{fontSize:30}}>Alcantara x Itambi</Text>
        </View>
        <View style={styles.itemView}>
        <Text style={{fontSize: 30}}>MB14</Text>
        <Text style={{fontSize:30}}>Itaboraí x Cachoeiras de Macacu</Text>
        </View>
        <View style={styles.itemView}>
        <Text style={{fontSize: 30}}>518M</Text>
        <Text style={{fontSize:30}}>Mutuá x Niterói(BR-101)</Text>
        </View>
        <View style={styles.itemView}>
        <Text style={{fontSize: 30}}>MB12</Text>
        <Text style={{fontSize:30}}>Niteró x Saquarema</Text>
        </View>
        <View style={styles.itemView}>
        <Text style={{fontSize: 30}}>B105</Text>
        <Text style={{fontSize:30}}>Rio Bonito x Araruama</Text>
        </View>
    </ScrollView>
    </View>
    )
}

const styles=StyleSheet.create({
    itemView:{
        borderColor: 'black',
        borderWidth: 2,
        width: '90%',
        height: 110,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})