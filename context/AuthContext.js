import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { SIGN_IN, SIGN_OUT } from '../redux/types';

function authContextProvider() {
  const dispatch = useDispatch();

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        try {
          await AsyncStorage.setItem('userToken', 'dummy-auth-token')
          dispatch({ type: SIGN_IN, payload: 'dummy-auth-token' });
        } catch (e) {
          // saving error
          console.log("Error storing userToken!", e.message)
        }
      },
      signOut: async () => {

        try {
          await AsyncStorage.removeItem('userToken')
          dispatch({ type: SIGN_OUT });
        } catch (e) {
          // saving error
          console.log("Error deleting userToken!", e.message)
        }
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
  
        dispatch({ type: SIGN_IN, payload: 'dummy-auth-token' });
      },
    }),
    []
  );

  return authContext;
}


export default authContextProvider;
