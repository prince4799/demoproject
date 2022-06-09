import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    createDrawerNavigator
  } from '@react-navigation/drawer';
  import Home  from './screen/home';
  import Profile  from './screen/profile';
  import Settings  from './screen/settings';
  import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

  const Drawer = createDrawerNavigator();
  
  const Drawer_design =(props)=>{
  return(
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer} {...props}>
      <View 
      style={styles.drawerItemDesign}>
      <DrawerItem
      label={"Home"}
      labelStyle={{color:"rgba(255, 167, 129,1)"}}
      onPress={()=>props.navigation.navigate('Home')}/>
      </View>
      <View
      style={[styles.drawerItemDesign,]}>
      <DrawerItem
      label={"Profile"}
      labelStyle={{color:"rgba(255, 167, 129,1)"}}
      onPress={()=>props.navigation.navigate('Profile')}
      />
      </View>
      <View
      style={[styles.drawerItemDesign, ]}>
      <DrawerItem
      label={"Settings"}
      labelStyle={{color:"rgba(255, 167, 129,1)"}}
      onPress={()=>props.navigation.navigate('Settings')}
      />
      </View>
    </DrawerContentScrollView>
    )
    };

  
export default function Custom_Drawer ()
{
  return(
      <Drawer.Navigator
      drawerContent={(props) => <Drawer_design {...props}/>}
      screenOptions={{
       headerShown: false,
     }}>
       <Drawer.Screen name="Home"  component={Home}
       options={{headerShown: false,}}/>
       <Drawer.Screen name="Profile"  component={Profile}
       options={{headerShown: false}}/>
       <Drawer.Screen name="Settings"  component={Settings}
       options={{headerShown: false}}/>
     </Drawer.Navigator> 
      
);
}

const styles=StyleSheet.create(
  {
    drawerContainer:{
      flex:1,
      backgroundColor:'rgba(255, 167, 129,0.7)',
      justifyContent:"flex-start",
      flexDirection:"column",
    },
    drawerItemDesign:{
      backgroundColor:"rgb(125, 15, 75)",
      borderRadius:15,
      margin:1,
      borderColor:"white",
      borderWidth:3,
    }
  }
);
