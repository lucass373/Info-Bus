import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../types";
import { Entypo } from '@expo/vector-icons'; 

export default function ChatScreen({ navigation }: RootTabScreenProps<'ChatScreen'>){
    return(
        <View style={{flex: 1}}>
    <ScrollView contentContainerStyle={{alignItems: 'flex-start'}}>
        <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginTop: 20, }}>
        <Entypo style={{marginTop: -5,marginRight: -16}} name="triangle-left" size={50} color="black"  />
        <View style={styles.itemView}>
            <View style={{width: '100%',borderBottomWidth: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Nicolau</Text>
        </View>
        <Text style={{fontSize: 15}}>Onibus Atrasado</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>10:00</Text>
        </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Entypo name="location-pin" size={30}/>
        <Text style={{fontWeight: 'bold'}}>Itaboraí</Text>
        </View>
        </View>
        

        <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginTop: 20, }}>
        <Entypo style={{marginTop: -5,marginRight: -16}} name="triangle-left" size={50} color="black"  />
        <View style={styles.itemView}>
            <View style={{width: '100%',borderBottomWidth: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Jose Creyson</Text>
        </View>
        <Text style={{fontSize: 15}}>Transito Congestionado</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>12:00</Text>
        </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Entypo name="location-pin" size={30}/>
        <Text style={{fontWeight: 'bold'}}>Niterói</Text>
        </View>
        </View>
    </ScrollView>
    <View style={styles.msgView}>
    <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'column', height: 100}} horizontal={true}>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Ônibus Atrasado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Trânsito Congestionado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Ônibus Atrasado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Ônibus Atrasado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Ônibus Atrasado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Ônibus Atrasado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Ônibus Atrasado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opView}><Text style={styles.opText}>Ônibus Atrasado</Text></TouchableOpacity>
        </ScrollView>
        </View>
    </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    opText:{
        fontWeight: 'bold',
        fontSize: 13
        
    },
    itemView:{
        height: 100,
        width: 200,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center'
    },
    msgView:{
        borderTopColor: 'black',
        borderTopWidth: 2,
    },
    opView:{
        borderColor: 'black',
        borderWidth: 2,
        height: 35,
        width: 150,
        margin: 5,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',     
    },
})