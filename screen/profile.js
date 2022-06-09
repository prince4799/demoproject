

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Welcome to Profile Screen</Text>
            <TouchableOpacity style={styles.touch}
            onPress={console.log("pressed now")}>

                </TouchableOpacity>

            
        </View>
    );
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#054459",
        },
        touch:{
            backgroundColor: "white",
            height: 10,
            width: 100,
        }
    }
)