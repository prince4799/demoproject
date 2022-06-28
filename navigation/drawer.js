import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native'
import Home from '../screen/classScreens/classhome';
import Last from '../screen/classScreens/last';
import MyTabs from './tab'
import Profile from '../screen/classScreens/classprofile';
import { TouchableOpacity } from 'react-native-gesture-handler';
  const Drawer = createDrawerNavigator();

const Drawer_design = (props) => {
  return (
    <DrawerContentScrollView 
    // style={{backgroundColor:'#042559',top:0}}
    contentContainerStyle={styles.drawerContainer} {...props}>
      <View style={{backgroundColor:'#042559',top:-10}}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image
      style={{height:50, width:50,alignSelf:'flex-end',backgroundColor:'#fff'}}
      resizeMode='contain'
      source={require('../Images/cancel.jpg')}/>
      </TouchableOpacity>
      <Image
      style={{height:200, width:160,alignSelf:'center',position:'relative'}}
      resizeMode='contain'
      source={require('../Images/user.png')}/>
      <Text style={{color:'#fff',alignSelf:'center'}}>User</Text>
      </View>
      <View
       >
        <DrawerItem
        style={styles.drawerItemDesign}
          label={"Last"}
          labelStyle={{ color: "#fff" }}
          onPress={() => props.navigation.navigate(Last)} />
        <DrawerItem
         style={styles.drawerItemDesign}
          label={"Home"}
          labelStyle={{ color: "#fff" }}
          onPress={() => props.navigation.navigate(Home)}
        />
        <DrawerItem
         style={styles.drawerItemDesign}
          label={"Profile"}
          labelStyle={{ color: "#fff" }}
          onPress={() => props.navigation.navigate(Profile)}
        />
      </View>
    </DrawerContentScrollView>
  )
};


export default function Custom_Drawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Drawer_design {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType:'front'
      }}>
      <Drawer.Screen name="tabs" component={MyTabs}
        options={{ headerShown: false, }} />
    </Drawer.Navigator>

  );
}

const styles = StyleSheet.create(
  {
    drawerContainer: {
      flex: 1,
      backgroundColor: '#4287f5',
      // justifyContent: 'flex-start',
      flexDirection: "column",
    },
    drawerItemDesign: {
      // borderRadius: 15,
      margin: 1,
      borderColor: "white",
      borderBottomWidth: 1,
      top: 0,

    }
  }
);
