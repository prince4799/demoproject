

import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Profile()
{
    return(
        <View style={styles.container}>
            <Text>Welcome to Profile Screen</Text>
        </View>
    );
}
const styles=StyleSheet.create(
    {
      container:{
            flex:1,
            backgroundColor:"ffa781",
        }
    }
)