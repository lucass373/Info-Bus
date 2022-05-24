import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function PerfScreen(){
    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
           <Text style={{fontWeight: 'bold', fontSize: 40}}>Perfil no Ar</Text>
           </View>
           <View style={styles.usrView}>
               <FontAwesome name='user' size={100}/>
           </View>
           <View>
               <Text style={{fontWeight: 'bold', fontSize: 35}}>nome: Tey Tey</Text>
               <Text style={{fontWeight: 'bold', fontSize: 35}}>idade: 23 anos</Text>
               <Text style={{fontWeight: 'bold', fontSize: 35}}>_______________</Text>
               <Text style={{fontWeight: 'bold', fontSize: 35}}>_______________</Text>
               <Text style={{fontWeight: 'bold', fontSize: 35}}>_______________</Text>
           </View>
        </View>
    )}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    usrView:{
        borderColor: 'black',
        borderWidth: 2,
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
})