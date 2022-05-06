import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

function Signup({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Signup Page</Text>
      {/* <Button title='Go to Chat' onPress={() => navigation.navigate('Chat')} /> */}
    </View>
  );
}

export default Signup;
