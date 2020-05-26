import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function LoginScreen(props) {

  const onLoginPress = () => {
    props.navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
