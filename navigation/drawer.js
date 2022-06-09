import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator
} from '@react-navigation/drawer';
// import Settings  from './screen/settings';
import Home from '../screen/classScreens/classhome';
// import Home from '../screen/home';
// import Profile from '../screen/classScreens/classprofile';
import Last from '../screen/classScreens/last';
import MyTabs from './tab'
  const Drawer = createDrawerNavigator();

const Drawer_design = (props) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer} {...props}>
      <View
        style={styles.drawerItemDesign}>
        <DrawerItem
          label={"Last"}
          labelStyle={{ color: "rgba(255, 167, 129,1)" }}
          onPress={() => props.navigation.navigate(Home)} />
      </View>
      <View
        style={[styles.drawerItemDesign,]}>
      </View>
      <View
        style={[styles.drawerItemDesign,]}>
        <DrawerItem
          label={"Home"}
          labelStyle={{ color: "rgba(255, 167, 129,1)" }}
          onPress={() => props.navigation.navigate(Last)}
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
      }}>
      <Drawer.Screen name="Home" component={MyTabs}
        options={{ headerShown: false, }} />
      <Drawer.Screen name="Last" component={MyTabs}
        options={{ headerShown: false }} />
    </Drawer.Navigator>

  );
}

const styles = StyleSheet.create(
  {
    drawerContainer: {
      flex: 1,
      backgroundColor: 'rgba(255, 167, 129,0.7)',
      justifyContent: "flex-start",
      flexDirection: "column",
    },
    drawerItemDesign: {
      backgroundColor: "rgb(125, 15, 75)",
      borderRadius: 15,
      margin: 1,
      borderColor: "white",
      borderWidth: 3,
    }
  }
);
