import React from 'react';
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './classhome'
import Login from './classlogin'

export default class Splash extends React.Component {

    componentDidMount() {
        this.check()
    }
    check = async () => {
        console.log("running fromsplash")
        var res = await AsyncStorage.getAllKeys()
        if (res)
            this.props.navigation.navigate(Home)
        else
            this.props.navigation.navigate(Login)
    }
    render() {
        return (
            <>
                <View style={{ backgroundColor: "red", flex: 1 }} />
            </>
        )
    }
}