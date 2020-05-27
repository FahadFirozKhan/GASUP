import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { SIGN_IN, RESTORE_TOKEN } from '../redux/types';

import { AuthContext } from '../context';
import AuthContextProvider from '../context/AuthContext';

import AuthLoadingScreen from '../screens/AuthLoading';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import AppNavigation from './AppFlow';


const Stack = createStackNavigator();


function AuthNavigation() {
  const userToken = useSelector(state => state.auth.userToken);
  const isSignout = useSelector(state => state.auth.isSignout);
  const [isSignedIn, setSignedStatus] = useState(false);
  const [isLoading, setLoadingStatus] = useState(true);
  const authContextValue = AuthContextProvider()
  const dispatch = useDispatch()
  
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        dispatch({ type: SIGN_IN, payload: userToken });
      } catch (e) {
        // Restoring token failed
        console.log("Error fetching userToken!", e.message)
      }

      setLoadingStatus(false)
      dispatch({ type: RESTORE_TOKEN, payload: userToken });
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <AuthLoadingScreen />
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      <Stack.Navigator headerMode="none">
      {userToken == null ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen} 
          options={{
            animationTypeForReplace: isSignout ? "pop" : "push"
          }}
        />
      ) : (
        <>
          <Stack.Screen name="Home" component={AppNavigation} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default AuthNavigation;