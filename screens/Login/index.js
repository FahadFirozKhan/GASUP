import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { AuthContext } from '../../context';

import logo from '../../assets/group2217.png';
import footerImage from '../../assets/maskGroup5.png';

import styles from './styles';
import InputField from './InputField';

function LoginScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const onLoginPress = () => {
    if (!username || username !== "admin@gmail.com") {
      Alert.alert("Username not found.")
    } else if (!password || password !== "Simform.123") {
      Alert.alert("Username or password is incorrect.")
    } else {
      signIn({ username, password })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRectangle}/>
      <View style={styles.topRightTriangle}/>
      <Image 
        style={styles.logoSpace}
        source={logo}
        resizeMode="contain"
      />
      <Text style={styles.mainHeading}>Login</Text>

      <InputField
        text={username}
        heading="Username"
        onValueChange={setUsername}
        customStyle={{marginTop: -16}}
      />
      <InputField
        text={password}
        heading="Password"
        onValueChange={setPassword}
        visibilityMask
      />
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.gitHubButton} onPress={() => Alert.alert("soon")}>
          <Text style={styles.buttonText}>Sign in with GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.footer}
        source={footerImage}
        resizeMode="cover"
      />
    </View>
  );
}

export default LoginScreen;
