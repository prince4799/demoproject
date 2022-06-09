import React from 'react';
import 
{
    View,
    Dimensions,
    StyleSheet,
    ImageBackground,
    TextInput,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';
import Home from './home';



export default function Login ({navigation}) {
    
    const [text, setText] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [invalid, setInvalid] = React.useState(false);

    const  check =(text,number)=>{
        if((text.length)>0&&(number.length)>0)
        {
            console.log("success");
           navigation.navigate(Home);
        }
        else
        {
            // Alert.alert(
            //     "Invalid Entry",
            //     "Please enter valid Input"
            // )
            setInvalid(true);
            console.log("fail");
        }
    }
    

    return(
        <ImageBackground
        source={{uri:"https://tryengineering.org/wp-content/uploads/bigstock-Khun-Dan-Prakan-Chon-Dam-In-Na-203362501.jpg"}} 
        style={styles.container}>
        <KeyboardAvoidingView
        behavior='height'
        keyboardVerticalOffset={0}
        style={styles.keyboardAvoid}
        enabled={true}
      >
            <Image
            source={{uri:"https://crackittoday.com/wp-content/uploads/2021/10/download-4-6.jpg"}}
            style={styles.logo}/>
            {invalid?<View
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignSelf:"center",
                }}>
                    <Text style={{
                        color:"#ffffff",
                        borderRadius:10,
                        backgroundColor:"rgba(111, 175, 237,0.8)",
                        fontSize:32,
                        padding:20,
                        borderWidth:2,
                        borderColor:"#ffffff"
                        }}>INVALID</Text>
                        <TouchableOpacity
                        onPress={()=>setInvalid(false)}>
                        <Text
                        style={{alignSelf:"center",
                        color:"white",
                        fontSize:18,
                        borderWidth:2,
                        borderRadius:10,
                        top:8,
                        backgroundColor:"gray",
                        padding:7,}}>OK</Text>
                        </TouchableOpacity>
                </View>:
            <View
            style={styles.inputContainer}>
            <TextInput
            placeholder='Enter Username'
            placeholderTextColor={'#bec3cc'}
            onChangeText={(text)=>setText(text)}
            style={styles.input}/>
            <TextInput
            placeholder='Enter UserID'
            placeholderTextColor={'#bec3cc'}
            onChangeText={(number)=>setNumber(number)}
            style={styles.input}/>
            </View>}
            <TouchableOpacity
            onPress={() =>check(text,number)}
            style={styles.touchable}>
            <Image
            source={require("../assets/new-login.png")}
            style={styles.login}/>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    keyboardAvoid:{
        flex:1,
    },
    container:{
        flex:1,
        textAlign: "center",
        alignContent:'center',
    },
    text:{
        fontSize:18,
        color:"white",
        textAlign: "center",
    },
    logo:{
        height:'7%',
        width:'35%',
        top:10,
        alignSelf:'center',
        borderRadius:10,
        padding:5,
        margin:5,
    },
    input:{
        alignSelf:'center',
        backgroundColor:'rgb(111, 175, 237)',
        height: 55,
        width:230,
        margin: 5,
        borderColor:'white',
        borderWidth: 1,
        textAlign: "center",
        borderRadius:30,
    },
    inputContainer:
    {
        height:150,
        width:250,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'rgb(255,255,255)',
        borderRadius:30,
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        top:(Dimensions.get("screen").height)/4,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    login:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:60,
    },
    touchable:{
        top:Dimensions.get("window").height/3,
        width:150,
        height:40,
        alignSelf:'center',
        justifyContent:"space-around",
        borderRadius:30,
    }
})