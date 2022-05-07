import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function AddChatRoom({ navigation }) {
  const [roomName, setRoomName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new chat room</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Close Modal</Text>
        </View>
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
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#0782F9',
    width: '60%',
    marginBottom: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
