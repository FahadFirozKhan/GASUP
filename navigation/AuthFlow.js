import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoadingScreen from '../screens/AuthLoading'
import LoginScreen from '../screens/Login'
import AppNavigation from './AppFlow'


const Stack = createStackNavigator();


function AuthNavigation() {
  const [isSignedIn, setSignedStatus] = useState(false);
  const [isLoading, setLoadingStatus] = useState(true);
  
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        setSignedStatus(!!userToken)
      } catch (e) {
        // Restoring token failed
        console.log("Error fetching userToken!")
      }

      setLoadingStatus(false)
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <AuthLoadingScreen />
  }

  return (
    <Stack.Navigator headerMode="none">
    {isSignedIn ? (
      <Stack.Screen name="Home" component={AppNavigation} />
    ) : (
      <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={AppNavigation} />
      </>
    )}
    </Stack.Navigator>
  );
}

export default AuthNavigation;