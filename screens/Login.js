import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

function Login({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Login Page</Text>
      <Button
        title='Go to Signup'
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}

export default Login;
