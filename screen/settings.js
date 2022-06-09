

import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Settings()
{
    return(
        <View style={styles.container}>
            <Text>Welcome to Settings Screen</Text>
        </View>
    );
}
const styles=StyleSheet.create(
    {
      container:{
            flex:1,
            backgroundColor:"#ffa781",
        }
    }
)