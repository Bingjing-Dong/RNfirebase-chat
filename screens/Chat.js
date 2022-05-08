import React, { useContext, useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { database } from '../config/firebase';

function Chat({ navigation }) {
  const { user } = useContext(AuthenticatedUserContext);

  const [roomCollection, setRoomCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  const onHandleLogOut = () => {
    signOut(auth)
      .then(() => console.log('Logout success'))
      .then(() => navigation.navigate('Login'))
      .catch((err) => console.log(`Logout err: ${err}`));
  };

  const Item = ({ title }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Room', { name: title })}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    // console.log({ user });
    const unsubscribe = database
      .collection('ROOM')
      .onSnapshot((querySnapshot) => {
        const rooms = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            ...documentSnapshot.data(),
          };
        });
        setRoomCollection(rooms);
        if (loading) {
          setLoading(false);
        }
        return unsubscribe;
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Chat Home</Text>
      <Text style={styles.subTitle}>{user.uid}</Text> */}
      <FlatList
        data={roomCollection}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Item title={item.name} />}
      />

      <TouchableOpacity onPress={() => navigation.navigate('AddChatRoom')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add New Chat Room</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHandleLogOut}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 12,
  },
  item: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
