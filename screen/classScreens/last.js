import React from 'react';
import { View, ImageBackground, Button, PermissionsAndroid, Image } from "react-native"
import DocumentPickerResponse from "react-native-document-picker"
import ImagePicker from 'react-native-image-crop-picker';
export default class Last extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgLoc: " ",
      name: "abcd",
    }
  }

  requestCameraPermission = async () => {
    try {
      console.log("requestCameraPermission")
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,

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
          ImagePicker.openCamera({
            width:400,
            height:400,
          }).then(image =>{
            console.log(image.path)
            this.setState({
              imgLoc: image
            })
          })
          // CameraRoll.save(img1)
      } else {
        console.log("permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  selectFile = async () => {
    try {
      const res = await DocumentPickerResponse.pickSingle({
        type: [DocumentPickerResponse.types.images],
      })

      console.clear()
      this.setState({
        imgLoc: res
      })
      console.table([imgLoc])
    } catch (e) {
      console.log(e)
    }
  }

  hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    console.log(permission)
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  render() {

    return (
      <View style={{ flex: 1, }}>
        <ImageBackground style={{ flex: 3, backgroundColor: "red", alignItems: "center", height: "auto", width: "auto" }} source={{
          uri: this.state.imgLoc.path,
        }}>
        </ImageBackground>
        <Button title='select document'
          onPress={() => this.selectFile()} />
        <Button title='OPEN CAMERA'
          onPress={() => this.requestCameraPermission()} />
      </View>
    )
  }
}