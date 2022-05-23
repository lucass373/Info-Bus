import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { RootStackParamList, RootTabScreenProps } from "../types";
import ChatScreen from "./ChatScreen";
import LinhaScreen from "./LinhaScreen";


export default function BusScreen() {
    return (
      <NavigationContainer independent={true}>
        <RootNavigator />
      </NavigationContainer>
    );
  }
  
  /**
   * A root stack navigator is often used for displaying modals on top of all other content.
   * https://reactnavigation.org/docs/modal
   */
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  function RootNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BusScreen1} options={{ title: 'Linhas',headerShown: true, headerRight:() => <TouchableOpacity style={{height: 50, width: 50, borderColor: 'black', borderWidth: 2, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginRight: 20}}><FontAwesome size={30} name="user"/></TouchableOpacity>,}} />
        <Stack.Screen name="LinhaScreen" component={LinhaScreen} options={{title:'Itaboraí', headerRight:()=> <TouchableOpacity style={{height: 40, width: 40, borderColor: 'black', borderWidth: 2, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginRight: 20}}><FontAwesome size={20} name="search"/></TouchableOpacity>}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    );
  }
   function BusScreen1({navigation} : RootTabScreenProps<'BusScreen'>){
    return(
        <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('LinhaScreen')} style={styles.itemView}>               
                <Text style={styles.title}>Itaboraí</Text>               
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemView}>                
                <Text style={styles.title}>São Gonçalo</Text>                
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemView}>              
                <Text style={styles.title}>Rio de Janeiro</Text>               
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemView}>              
                <Text style={styles.title}>Nova Iguaçu</Text>               
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 15
    },
    itemView:{
        marginTop: 20,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        height: 200,
        width: '90%',
        flexDirection: 'column-reverse'
    }
})