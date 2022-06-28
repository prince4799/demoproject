/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import MyTabs from './navigation/tab'
import Custom_Drawer from './navigation/drawer'



export default App = () => {
  return (
    <NavigationContainer>
      <Custom_Drawer/>
    </NavigationContainer>
  );
}
