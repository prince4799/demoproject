import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import { images } from '../../util/imgSrc';
import Profile from './classprofile';

const tag = 'Home';
export default class Home extends Component {
    constructor() {
        super();

        // date = new Date().toLocaleString();
        this.state = {
            arr: [],
            enabled: false,
            abt: ''
        }
    }

    onTouched(key, abt) {
        console.log(this.state.arr)
        //   console.log('onTouched')
        if (this.state.arr.length === 0) {
            this.setState({
                arr: [key],
                enabled: true,
                abt: abt
            })

        }
        else if (this.state.arr.length != 0) {
            if (this.state.arr[this.state.arr.length - 1] != key) {
                this.setState(prevState => ({
                    arr: [...prevState.arr, key],
                    enabled: true,
                    abt: abt
                }))
            }
            else
                this.setState({
                    arr: [],
                    enabled: false
                })
        }
        console.log(this.state.arr)



    }
    componentDidMount() {
        setInterval(() => { this.setState({ date: new Date().toLocaleString() }) }, 1000)
    }

    // abc(user) {
    //     console.log(tag, user);
    // }

    render() {
        var user = {
            uid: "rahul",
            name: "bharti",
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ marginTop: 10, }}
                    horizontal
                    data={[...images]}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.flatListStyle}
                            onPress={() => { this.onTouched(item.key, item.data.abt) }}>
                            {/* // onPress={()=>this.props.navigation.navigate('Profile')} > */}
                            <Text style={[styles.titleStyle, { fontSize: 12 }]}>{item.data.distance}</Text>
                            <Text style={styles.titleStyle}>{item.data.name}</Text>
                            <Text style={[styles.titleStyle,
                            {
                                fontWeight: 'normal',
                                fontSize: 10
                            }]}>{item.data.address}</Text>
                            <View style={{ marginLeft: 1, flexDirection: "row", }}>
                                <Text style={{ fontSize: 9, color: '#0c6475', marginLeft: 5 }}>{'\n'}Next Available...</Text>
                                <Image style={[styles.imgStyle,]} source={item.data.img} />
                                <Image style={[styles.imgStyle, { marginLeft: 5, }]} source={item.data.img} />
                                <Image style={[styles.imgStyle, { marginLeft: 8, }]} source={item.data.img} />
                            </View>
                            <Text style={{
                                color: '#0c6475',
                                fontSize: 10,
                                fontWeight: 'bold',
                                marginLeft: 5
                            }}>{this.state.date}</Text>
                        </TouchableOpacity>
                    )} />
                <TouchableOpacity style={{ height: 20, width: 20 }}>
                    <View style={styles.Button} />
                </TouchableOpacity>
                {this.state.enabled && <View style={styles.abtText}>
                    <Text style={{ color: '#0c6475', margin: 10 }}>{this.state.abt}</Text>
                </View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flatListStyle: {
        borderWidth: 1.5,
        borderColor: '#0996bd',
        borderRadius: 10,
        margin: 4,
        height: 150,
        backgroundColor: "#ebeded",
        elevation: 10,

    },
    titleStyle: {
        color: '#0c6475',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    imgStyle:
    {
        height: 25,
        width: 25,
        margin: 8,
        marginLeft: 45,
        borderRadius: 5,
        borderWidth: 1.3,
        borderColor: '#0c6475',
        // elevation:
    },
    abtText: {
        height: 300,
        width: 300,
        alignSelf: "center",
        marginBottom: 30,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#0996bd',
        alignItems: "center",

    },
    Button: {
        flex: 1,
        height: 40,
        width: 80,
        borderRadius: 20,
        backgroundColor: "Black",
        top: 50
    }
})
// ebf3f5