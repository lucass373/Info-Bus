import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FavScreen({navigation}){
    return(
        <View style={styles.container} >
        <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')} style={styles.itemView}>
            <Text style={{fontSize: 30}}>413M</Text>
            <Text style={{fontSize:30}}>V. Das Pedras x Niterói</Text>
            </TouchableOpacity>
            <View style={styles.itemView}>
            <Text style={{fontSize: 30}}>413M</Text>
            <Text style={{fontSize:30}}>V. Das Pedras x Niterói</Text>
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