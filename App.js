import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import reduxStore from './redux';
import MainNavigation from './navigation/AuthFlow';

export default function App() {
  console.disableYellowBox = true;
  
  return (
    <Provider store={reduxStore}>
      <NavigationContainer><MainNavigation /></NavigationContainer>
    </Provider>
  );
}