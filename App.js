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
import { NavigationContainer ,} from '@react-navigation/native';
import { navigation } from 'react-navigation';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation-stack'; props

// import Custom_Drawer  from './drawer.js'
import Login from './screen/login'
import Settings from './screen/settings'
import Last  from './screen/last'
import Custom_Drawer from './drawer'

const Stack=createStackNavigator();


export default App= ()=> {
return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
    name='Login' component={Login}
    options={{ headerShown: false}}/>
    <Stack.Screen
    name='Home' component={Custom_Drawer}
    options={{ headerShown: false}}/>
  </Stack.Navigator>
    <Stack.Screen
    name='Last' component={Last}
    options={{ headerShown: false}}/>
  </NavigationContainer>
);
}
