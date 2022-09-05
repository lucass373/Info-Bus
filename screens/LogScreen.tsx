import { SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

export default  function LogScreen(){
    return(
    
    <View style={styles.container}>
        <TouchableOpacity><Text>teste</Text></TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',       
    },
})