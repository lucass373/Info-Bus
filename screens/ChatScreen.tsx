import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  Linking,
  SafeAreaView,
} from 'react-native'
import { RootTabScreenProps } from '../types'
import { Entypo } from '@expo/vector-icons'
import { db } from '../firebase/firebase'
import React, {
  PureComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { onValue, push, ref, set } from 'firebase/database'
import Geolocation from 'react-native-geolocation-service'


const onPress = (ret) => {
  var hours = new Date().getHours()
var minutes = new Date().getMinutes()
  const newPostKey = push(ref(db, 'messages/')).key
  set(ref(db, `messages/${newPostKey}`), {
    mensagem: ret,
    hora: `${hours}:${minutes}`,
  })
}

export default function ChatScreen() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    onValue(ref(db, 'messages/'), (snapshot) => {
      setMessages([])
      const data = snapshot.val()
      if (data !== null) {
        Object.values(data).map((messages) => {
          setMessages((oldArray) => [...oldArray, messages])
        })
      }
    })
  }, [])

  function ItemComponent({ messages }) {
    return (
      <View style={styles.container}>
        {messages.map((messages: any, index: string) => {
          return (
            <View key={index} style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Entypo
                  style={{ marginTop: -5, marginRight: -16 }}
                  name="triangle-left"
                  size={50}
                  color="black"
                />
                <View style={styles.itemView}>
                  <View
                    style={{
                      width: '100%',
                      borderBottomWidth: 2,
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                      Nicolau
                    </Text>
                  </View>
                  <Text style={{ fontSize: 15 }}>{messages.mensagem}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {messages.hora}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="location-pin" size={30} />
                <Text style={{ fontWeight: 'bold' }}>Itaboraí</Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ alignItems: 'flex-start' }}>
        {messages.length > 0 ? (
          <ItemComponent messages={messages} />
        ) : (
          <Text style={styles.opText}>no items</Text>
        )}
      </ScrollView>
      <View style={styles.msgView}>
        <ScrollView
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'column',
            height: 100,
          }}
          horizontal={true}
        >
          <TouchableOpacity onPress={() => onPress('Ônibus Atrasado')} style={styles.opView}>
            <Text style={styles.opText}>Ônibus Atrasado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress('Trânsito Congestionado')} style={styles.opView}>
            <Text style={styles.opText}>Trânsito Congestionado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress('Ônibus quebrado')} style={styles.opView}>
            <Text style={styles.opText}>Ônibus quebrado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress('Ônibus Sujo')} style={styles.opView}>
            <Text style={styles.opText}>Ônibus Sujo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress('Ônibus Lento')} style={styles.opView}>
            <Text style={styles.opText}>Ônibus Lento</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress('Motorista mal-humorado')} style={styles.opView}>
            <Text style={styles.opText}>Motorista mal-humorado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress('suco tang')} style={styles.opView}>
            <Text style={styles.opText}>suco tang</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress('suco tang2')} style={styles.opView}>
            <Text style={styles.opText}>suco tang2</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  opText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  itemView: {
    height: 100,
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
  },
  msgView: {
    borderTopColor: 'black',
    borderTopWidth: 2,
  },
  opView: {
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
