import React from 'react';
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './classhome'
import Login from './classlogin'

export default class Splash extends React.Component {

    componentDidMount() {
        this.check()
    }
    check = () => {
        
            this.props.navigation.navigate(Home)
    }
    render() {
        return (
            <>
                <View style={{ backgroundColor: "red", flex: 1 }} />
            </>
        )
    }
}