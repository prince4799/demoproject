import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal } from 'react-native'
import Last from './last';
import MapView, { Marker } from 'react-native-maps'


import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Profile extends React.Component {

    state = {
        visible: false,
        pin: [
            {
                latitude: 25.4358,
                longitude: 81.8463,
                pincolor:'#187370'
            },
            {
                latitude: 28.6429,
                longitude: 77.3402,
                pincolor:'#6e1873'
            },
            {
                latitude: 25.6838,
                longitude: 85.3550,
                pincolor:'#057a17'
            },
            {
                latitude: 26.8467,
                longitude: 80.9462,
                pincolor:'#185873'
                
            },
            {
                latitude: 25.3176,
                longitude: 82.9739,
                pincolor:'#183073'
            },
            {
                latitude: 26.4499,
                longitude: 80.3319,
                pincolor:'#fcba03'
            },
        ],
      
        
    }

    showModal = () => {
        console.log('Tag:efore showModal', this.state.visible)
        this.setState({ visible: !this.state.visible })
        console.log('Tag:after showModal', this.state.visible)
    }
    logout = async () => {
        try {
            var res = await AsyncStorage.getAllKeys()
            if (res) {
                new AsyncStorage.clear()
                console.log("logged out")
                this.props.navigation.navigate('Login')
            }
            else Alert.alert("user not found")
        }
        catch (e) { console.log(e) }
    }
    componentDidMount = () => {
        console.table(this.state.pin)
        console.log("Tag:after table")
    }
    render() {


        return (
            <View style={{ flex: 1 }}>
                {/* <TouchableOpacity onPress={() => this.logout()}>
                    <View style={{ height: 50, width: 50, backgroundColor: "red" }} />
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.modal}
                    onPress={() => this.showModal()}>
                    <Text>open modal</Text>
                </TouchableOpacity> */}
                {/* <Modal visible={this.state.visible}
                    animationType="fade"
                    transparent={true}>
                    <TouchableOpacity style={{
                        backgroundColor: "white",
                        height: 100,
                        width: 100, alignSelf: "center",
                        marginVertical: Dimensions.get('window').height / 2
                    }}
                        onPress={() => this.setState({ visible: false })}>
                        <Text style={{ color: "black", }}>Demo Modal</Text>
                    </TouchableOpacity>
                </Modal> */}
                <MapView style={{ height: Dimensions.get('window').height - 40, width: Dimensions.get('window').width }}
                     initialRegion={{
                        latitude: 20,
                        longitude:78,
                        latitudeDelta: 25,
                        longitudeDelta: 25,
                      }}
                    mapType={'satellite'}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    followsUserLocation={true}>
                    {this.state.pin.map((item, index) => (<Marker coordinate={item} pinColor={item.pincolor} />))}
                </MapView>
            </View>
        )
    }
}
{/* <TouchableOpacity onPress={()=>this.props.navigation.(StackActions.push("Last"))}
> */}

styles = StyleSheet.create({
    modal: {
        height: Dimensions.get("window").height / 16,
        width: Dimensions.get("screen").width / 3,
        backgroundColor: "pink",
        alignSelf: "center"
    }
})