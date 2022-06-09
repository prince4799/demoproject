import React from 'react';
import {
    View,
    TextInput,
    ImageBackground,
    StyleSheet,
    Button,
    Alert,
}
    from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './classhome';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    onclick = async (password, username) => {
        if (username.length && password.length) {
            var user = username
            var res = await AsyncStorage.getItem(user)
            if (res) {
                Alert.alert("already in use")
            } else {
                try {
                    await AsyncStorage.setItem(user, password)
                    console.log(res, user)
                    console.log("running")
                    this.props.navigation.navigate(Home)
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
        else {
            Alert.alert("Invalid ")
        }

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground style={{ flex: 1, height: "auto", width: 400, justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/dam1.jpg')}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Username' style={styles.inputText}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username} />
                        <TextInput placeholder='Password' style={styles.inputText}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password} />
                    </View>
                    <Button title='ok' onPress={() => { this.onclick(this.state.password, this.state.username) }} />
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputText: {
        backgroundColor: "rgba(4, 122, 219,0.8)",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 15,
        margin: 8,
        width: 190,
        justifyContent: "center",
        textAlign: "center",
    },
    inputContainer: {
        margin: 20,
        backgroundColor: "rgba(255, 255, 255,0.45)",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        height: 150,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
    }
})