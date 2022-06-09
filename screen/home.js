

import React, { useState } from 'react';;
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { images } from "../util/imgSrc"



// function expandable(item, setAbt, setPressed, key, abt, setKey, pressed) {

//     if (key.length === 0) {
//         setKey([...key, item.key])
//         setPressed(true)
//         setAbt(item.data.abt)

//     }
//     else if (key.length != 0) {
//         if (key[key.length - 1] != item.key) {
//             setKey([...key, item.key])
//             setPressed(true)
//             setAbt(item.data.abt)
//         }
//         else {
//             setKey([])
//             setAbt(null)
//             setPressed(false)
//         }
//     }
// }
var json = [
    {"firstname" :"prince", "lastname":"rahul",} ,
    {"firstname" :"A", "lastname":"B",}
]
// var json = ["B", "A"];
export default function Home() {
    date = new Date().toLocaleString();
    var [abt, setAbt] = React.useState("");
    var [id, setid] = React.useState(-1);
    var [pressed, setPressed] = React.useState(false);
    var [key,setKey] = React.useState(json) ;


    console.clear();

    function update(){
    console.log("\nTAG", JSON.stringify(key));
    key[0].firstname="sa"
      console.log("\nTAG", JSON.stringify(key));
       }
    return (
        <View style={styles.container}>

            <View style={{
                flex: 2,
                justifyContent: "center",

            }}>
                <FlatList

                    style={{ elevation: 10, }}
                    horizontal
                    data={[...images]}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.imgContainer}
                            onPress={() => { update()
                                    index.clicked = true;
                                    setid(index)
                                    setAbt(item.data.abt)
                                    if(id!==index)
                                    setPressed(true)
                                    else
                                    setPressed(false)
                            }}>
                            {/* // onPress={() => [(expandable(item, setAbt, setPressed, key, abt, setKey, pressed))]}> */}
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#104d57" }}>{item.data.distance} km</Text>
                                <Image source={require('../assets/arrow.png')}
                                    style={[styles.imgStyle, { height: 20, width: 20, marginHorizontal: 120 }]} />
                            </View>
                            <Text
                                style={{ fontWeight: "bold", fontSize: 20, color: "#104d57" }}>{'\b'}{item.data.name}</Text>
                            <Text
                                style={{ fontSize: 20, color: "#104d57" }}>{'\b'}{item.data.address}{item.data.key}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12, color: "#104d57" }}>Next aavailable....</Text>
                                <Image source={item.data.img}
                                    style={styles.imgStyle} />
                                <Image source={item.data.img}
                                    style={styles.imgStyle} />
                                <Image source={item.data.img}
                                    style={styles.imgStyle} />
                            </View>
                            <Text> {`${date}`}</Text>
                        </TouchableOpacity>
                    )} />
                    {pressed ? (<View style={styles.abtContainer}><Text style={{ fontSize: 30 }}>{abt}</Text></View>) : null}
            </View>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#054459",
        },
        imgStyle: {
            height: 20,
            width: 20,
            margin: 3,
        },
        imgContainer: {
            borderColor: '#c3c9c9',
            borderWidth: 3,
            width: 250,
            height: 160,
            margin: 3,
            borderRadius: 10,
            backgroundColor: 'rgba(255,255,255,0.5)',
        },
        abtContainer: {
            flex: 9,
            borderWidth: 5,
            margin: 8,
            borderRadius: 15,
            borderColor: '#c3c9c9',
        }
    })