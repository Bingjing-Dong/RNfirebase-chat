/** @format */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { GiftedChat } from 'react-native-gifted-chat';

function Chat() {
  return (
    <GiftedChat />
    // <View style={globalStyles.container}>
    //   <Text>Chat Page</Text>
    // </View>
  );
}

export default Chat;
