import React from 'react';
import { View, ActivityIndicator } from 'react-native';

class AuthLoadingScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="orange" size="large" />
      </View>
    )
  }
}

export default AuthLoadingScreen;
