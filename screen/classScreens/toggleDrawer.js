import React from 'react';
import {
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
// import {  } from '@react-navigation/native';

// import { TouchableOpacity } from 'react-native-gesture-handler';

// navigation.dispatch(DrawerActions.toggleDrawer());

var bool = true;

export default function ToggleDrawer() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
        // style={{backgroundColor:'rgba(4, 37, 89,0.2)'}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Image
                style={{ height: 20, width: 20, margin: 5, }}
                source={require('../../Images/hambergur.jpg')} />
        </TouchableOpacity>
    );
}