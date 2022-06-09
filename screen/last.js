

import React from 'react';
import {View,Text,StyleSheet,CameraRollAssetType} from 'react-native';

export default function Last()
{
    return(
        <View style={styles.container}>
            <Text>Welcome to last Screen</Text>
        </View>
    );
}
const styles=StyleSheet.create(
    {
      container:{
            flex:1,
            backgroundColor:"#054459",
        }
    }
)