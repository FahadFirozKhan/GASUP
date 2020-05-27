import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import feedsIcon from '../assets/feeds.png';
import stripsIcon from '../assets/strips.png';
import MyFeedScreen from '../screens/MyFeed';
import StripScreen from '../screens/Strips';


const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'My Feed') {
          iconName = feedsIcon;
        } else if (route.name === 'Strips') {
          iconName = stripsIcon;
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width: size, height: size, tintColor: color}} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'darkorange',
      inactiveTintColor: 'gray',
    }}
    initialRouteName="My Feed"
  >
    <Tab.Screen name="My Feed" component={MyFeedScreen} />
    <Tab.Screen name="Strips" component={StripScreen} />
  </Tab.Navigator>
  );
}

export default AppNavigation;