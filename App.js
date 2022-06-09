/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';
// import MyTabs from './navigation/tab'
// import { navigation } from 'react-navigation';

// import Login from './screen/login'

// import Settings from './screen/settings'
// import Home from './screen/home'
import Custom_Drawer from './navigation/drawer'
import Last from './screen/classScreens/last'
import Login from './screen/classScreens/classlogin'
// import MyTabs from './navigation/tab'
import Splash from './screen/classScreens/splash'
import Profile from './screen/classScreens/classprofile'

const Stack = createStackNavigator();


export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name='Splash' component={Splash}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='Login' component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='Home' component={Custom_Drawer}
          options={{ headerShown: false }} />
      </Stack.Navigator>
      <Stack.Screen
        name='Last' component={Last}
        options={{ headerShown: true }} />
      <Stack.Screen
        name='Profile' component={Profile}
        options={{ headerShown: false }}
      />
    </NavigationContainer>
  );
}
