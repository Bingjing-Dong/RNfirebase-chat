import { globalStyles } from '../styles/global';
import { GiftedChat } from 'react-native-gifted-chat';
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

function Chat({ navigation }) {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  const onHandleLogOut = () => {
    signOut(auth)
      .then(() => console.log('Logout success'))
      .then(() => navigation.navigate('Login'))
      .catch((err) => console.log(`Logout err: ${err}`));
  };

  return (
    // <GiftedChat />
    <View style={styles.container}>
      <Text style={styles.title}>Chat Home</Text>
      <Text style={styles.subTitle}>All chat rooms will be listed here</Text>
      <Text style={styles.subTitle}>{user.uid}</Text>
      <TouchableOpacity onPress={onHandleLogOut}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddChatRoom')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add New Chat Room</Text>
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
  subTitle: {
    fontSize: 20,
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

export default Chat;
