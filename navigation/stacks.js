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
 import Last from '../screen/classScreens/last'
 import Login from '../screen/classScreens/classlogin'
 import Splash from '../screen/classScreens/splash'
 import Profile from '../screen/classScreens/classprofile'
 import Home from '../screen/classScreens/classhome';
 
 const Stack = createStackNavigator();
 
 
 export default AppStack = () => {
   return (
       <Stack.Navigator >
        <Stack.Group>
         <Stack.Screen
           name='Splash' component={Splash}
           options={{ headerShown: false }} />
         <Stack.Screen
           name='Login' component={Login}
           options={{ headerShown: false }} />
           </Stack.Group>
           <Stack.Group>
         <Stack.Screen
           name='Home' component={Home}
           options={{ headerShown: false }} />
       <Stack.Screen
         name='Last' component={Last}
         options={{ headerShown: false }} />
       <Stack.Screen
         name='Profile' component={Profile}
         options={{ headerShown: false }}
         />
         </Stack.Group>
       </Stack.Navigator>

   );
 }
 