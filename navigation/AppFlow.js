import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyFeedScreen from '../screens/MyFeed'
import StripScreen from '../screens/Strips'


const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="My Feed" component={MyFeedScreen} />
    <Tab.Screen name="Strips" component={StripScreen} />
  </Tab.Navigator>
  );
}

export default AppNavigation;