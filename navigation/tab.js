import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './stacks'

const Tab = createBottomTabNavigator();



export default function MyTabs() {
  console.clear();
  return (
    <Tab.Navigator tabBar={props => <CustomTab {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="AppStack" component={AppStack}/>
    </Tab.Navigator>
  );
}

function CustomTab({ navigation }) {
  var [tabColor, setTabColor] = useState('#94c4a5');
  var [buttonSize1, setbuttonSize1] = useState(58);
  var [bool, setBool] = useState(false)
  var [bool1, setBool1] = useState(false)
  var [bool2, setBool2] = useState(false)

  return (
    <SafeAreaView style={style2(tabColor).tab}>
      <TouchableOpacity activeOpacity={0.5} style={bool ? button1(buttonSize1) : styles.button} onPress={() => pressed(1, navigation, setTabColor, setbuttonSize1, setBool, setBool1, setBool2)}>
        <Text style={styles.text}>Home</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={bool1 ? button1(buttonSize1) : styles.button} onPress={() => pressed(2, navigation, setTabColor, setbuttonSize1, setBool, setBool1, setBool2)}>
        <Text style={styles.text}>Profile</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={bool2 ? button1(buttonSize1) : styles.button} onPress={() => pressed(3, navigation, setTabColor, setbuttonSize1, setBool, setBool1, setBool2)}>
        <Text style={styles.text}>Last</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

const pressed = (val, navigation, setTabColor, setbuttonSize1, setBool, setBool1, setBool2) => {
  console.log('TAG=pressed')
  if (val === 1) {
    //  console.log('TAG=val===1')
    setTabColor("#94c4a5");
    setbuttonSize1(65)
    setBool(true)
    setBool1(false)
    setBool2(false)
    navigation.navigate('Home')
  }
  else if (val === 2) {
    setTabColor("#f0da4a");
    setbuttonSize1(65)
    setBool(false)
    setBool1(true)
    setBool2(false)
    navigation.navigate('Profile');
  }
  else {
    setTabColor("#e655d0");
    setbuttonSize1(65)
    setBool(false)
    setBool1(false)
    setBool2(true)
    navigation.navigate('Last')
  }
}

// const styles =(buttonSize)=> StyleSheet.create({

const styles = StyleSheet.create({
  button: {
    height: 58,
    width: 58,
    borderRadius: 45,
    borderWidth: 4,
    backgroundColor: "grey",
    elevation: 9,
    borderColor: "white",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    alignSelf: "center"
  }

})

const button1 = (buttonSize1) => StyleSheet.create({
  height: buttonSize1,
  width: buttonSize1,
  borderRadius: 45,
  borderWidth: 4,
  backgroundColor: "grey",
  elevation: 9,
  borderColor: "white",
  justifyContent: "center",
  alignSelf: "flex-start"
  // position: "relative",
})


const style2 = (tabColor) => StyleSheet.create({
  tab: {
    backgroundColor: tabColor,
    flexDirection: "row",
    height: 60,
    width: Dimensions.get('window').width,
    borderRadius: 20,
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 10,
  }
})