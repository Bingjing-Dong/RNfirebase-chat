import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../screens/Chat';
import AddChatRoom from '../screens/AddChatRoom';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ChatRoomScreen from '../screens/ChatRoomScreen';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation }) => ({
          headerRight: () => (
            <MaterialIcons
              name="add-circle"
              size={24}
              style={{ color: '#0782F9' }}
              onPress={() => navigation.navigate('AddChatRoom')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddChatRoom"
        component={AddChatRoom}
        options={({ navigation }) => ({
          title: 'Create New Chat Room',
          headerRight: () => (
            <MaterialIcons
              name="cancel"
              size={24}
              style={{ color: '#0782F9' }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Room"
        component={ChatRoomScreen}
        options={({ navigation, route }) => ({
          title: route.params.name,
          headerRight: () => (
            <MaterialIcons
              name="cancel"
              size={24}
              style={{ color: '#0782F9' }}
              onPress={() => navigation.navigate('Chat')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
