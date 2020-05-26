import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/AuthFlow';

export default function App() {
  return (
    <NavigationContainer><MainNavigation /></NavigationContainer>
  );
}