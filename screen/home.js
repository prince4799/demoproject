

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';
// import {images} from "../util/imgSrc"


export default function Home()

{
   const images=React.useState(
    [
       { img:require('../assets/dams.png'),key:'1'},
       { img:require('../assets/dams.png'),key:'2'},
       { img:require('../assets/dams.png'),key:'3'},
       { img:require('../assets/dams.png'),key:'4'},
       { img:require('../assets/dams.png'),key:'5'},
       { img:require('../assets/dams.png'),key:'6'},
    ]);


    return(
        <View style={styles.container}>
            <Text>Welcome to Home Screen</Text>
        <View style={{
            flex:2,
            alignSelf:"center",
            justifyContent:"center",
            }}>
        <FlatList
        data={images}
        keyExtractor={(images)=>images.key}
        renderItem={({item})=>(
            <Image source={item.img}
            style={{
                height:50,
                width:50,
                alignSelf:"center",
                top:40}}/>
        )}/>
        {/* <Image
        source={require('../assets/dams.png')}
        style={{height:250,width:250,alignSelf:"center",top:40}}/> */}
        </View>
        </View>
    );
}
const styles=StyleSheet.create(
    {
      container:{
          flex:1,
          backgroundColor:"#ffa781",
        },
        touchable:{
            backgroundColor:'rgb(130, 61, 209)',
            height:100,
            width:100,
            borderRadius:50,
            alignSelf:"center",
            alignItems:"center",
            position:"absolute",
            zIndex:1
        },
        touchableView:{
            flex:1,
            flexDirection:"column-reverse",
            
        }
    }
)