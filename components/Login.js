import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Alert,TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
function Login() {
    const navigation=useNavigation()
    const [emailLogin, setEmailLogin] = React.useState("");
    const [passwordLogin, setPasswordLogin] = React.useState("");

    const handleLogin = async ()=>{

      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailLogin)){

        if(passwordLogin!==""){
          const user = {
            email:emailLogin,
            password:passwordLogin
          }
          Axios.post("http://192.168.0.102:8088/api/login",user).then(async(res)=>{

          if(res){
            try {
              await AsyncStorage.setItem('email', res.data.user.email)
              Alert.alert("Successful Login",`${res.data.user.email} Logged In Successfully`)
              navigation.navigate("Form")
            } catch (e) {
              console.log(e)
            }
          }
            
          }).catch(err=>{Alert.alert("ERROR",`${err.response.data.error}`)})
        }
        else{
          Alert.alert("Error","Please Enter Password")
        }
      }
      else{
        Alert.alert("Error","Please Enter Correct Email")
      }


    }
  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection:'row' ,justifyContent:'center'}}>
                <Text style={styles.title}>Login</Text> 
                <TouchableOpacity style={{backgroundColor:'#4A5568' , width:80 ,height:40, justifyContent:'center',borderRadius:50}} onPress={() =>{ navigation.navigate('Register')}}>
                  <Text style={{alignSelf:'center', color:"#FFFFFF"}}>Register</Text>
                </TouchableOpacity>
                </View>

            </View>  
            <SafeAreaView style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={(email)=>setEmailLogin(email)}
                    value={emailLogin}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPasswordLogin}
                    value={passwordLogin}
                    placeholder="Password"
                    secureTextEntry={true}
                    
                />
                  <TouchableOpacity style={{backgroundColor:'#494dff' , width:80 ,height:40, justifyContent:'center',borderRadius:50}} onPress={()=>handleLogin()}>
                  <Text style={{alignSelf:'center', color:"#FFFFFF"}}>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        height:'100%'
      },
      header:{
        height: 200,
        paddingTop: 38,
        backgroundColor: '#2D3748',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
       
        
      },
      title: {
        textAlign: 'right',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight:100,
        paddingLeft:160,
        
        
        
        
    
      },
      body:{
        alignItems: 'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:10,
        paddingHorizontal:20,
        overflow: 'scroll'
      },
      input: {
        height: 40,
        margin: 12,
        width:250,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius:50,
        borderColor:'red'
      },
      buttonLogin: {
          height: 40,
          margin: 12,
          paddingTop: 20,
          width: 250,
          borderWidth: 1,
          textAlign: 'center',
          backgroundColor: 'blue'
      }
});

export default Login;