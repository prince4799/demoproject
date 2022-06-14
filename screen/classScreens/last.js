import React, {useRef} from 'react';
import {View,ImageBackground,Button,PermissionsAndroid,Image,} from "react-native"
import DocumentPickerResponse from "react-native-document-picker"
export default class Last extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgLoc:" ",
            name:"abcd",
        }
    }

     requestCameraPermission = async () => {
        try {
            console.log("requestCameraPermission")
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,

            {
              title: "ACTION REQUIRED",
              message: " NEED YOUR PERMISSION TO ACCESS DEVICE",
            
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
          } else {
            console.log("permission denied");
          }
        } catch (err) {
            console.warn(err);
          }
        };
  
    selectFile = async () => {
        try {
          const res = await DocumentPickerResponse. pickSingle({
            type: [DocumentPickerResponse.types.images],
          })
          
          console.clear()
          this.setState({
              imgLoc:res
            })
            console.table([imgLoc])
        }catch (e) {
            console.log(e)
        }
    }
    render() {

        return (
            <View style={{flex: 1, }}>
                <ImageBackground style={{flex: 3,backgroundColor:"red",alignItems:"center",height:"auto",width:"auto"}} source={{
          uri:this.state.imgLoc.uri,
        }}>
                </ImageBackground>
                <Button title='select document'
                onPress={()=>this.selectFile()}/>
                <Button title='OPEN GALLERY'
                onPress={()=>this.requestCameraPermission()}/>
            </View>
        )
    }
}