import { LogBox, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
      <Text style={styles.logoText}>InfoBus</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 40}}>
      <Text style={styles.logoText}>Bem-Vindo ao </Text>
      <Text style={styles.logoText}>InfoBus!!</Text>
      <TouchableOpacity onPress={()=>navigation.jumpTo('BusScreen')} style={styles.butView}>
        <Text style={styles.logoText}>Linhas Presentes</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoView:{
    height: 200,
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  butView:{
    marginTop: 60,
    height: 50,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
});
