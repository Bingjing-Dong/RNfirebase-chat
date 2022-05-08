import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { database } from '../config/firebase';

export default function AddChatRoom({ navigation }) {
  const [roomName, setRoomName] = useState('');
  function handleCreateRoom() {
    if (roomName.length > 0) {
      database
        .collection('ROOM')
        .add({
          name: roomName,
        })
        .then(() => {
          navigation.navigate('Chat');
        });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new chat room</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter room name"
        autoCapitalize="none"
        value={roomName}
        onChangeText={(text) => setRoomName(text)}
      />
      <TouchableOpacity
        style={
          roomName.length === 0
            ? { ...styles.button, ...styles.buttonDisabled }
            : styles.button
        }
        onPress={handleCreateRoom}
      >
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444',
    alignSelf: 'center',
    paddingBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 12,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#0782F9',
    width: '60%',
    marginBottom: 5,
    alignSelf: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
