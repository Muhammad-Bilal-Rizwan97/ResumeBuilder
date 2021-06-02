import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Alert ,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
function Register({navigation}) {
    const [emailRegister, setEmailRegister] = React.useState("");
    const [passwordRegister, setPasswordRegister] = React.useState("");

    const handleSubmit = async()=>{

      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailRegister)){
        if(passwordRegister!==""){
          if(passwordRegister.length>=6){
          
          const user = {
            email:emailRegister,
            password:passwordRegister
          }
          Axios.post("http://192.168.0.101:8088/api/register",user).then(async(res)=>{

          if(res){
            try {
              await AsyncStorage.setItem('email', res.data.user.email)
              Alert.alert("Successful Register",`${res.data.user.email} Registered Successfully`)
              navigation.navigate("Login")
            } catch (e) {
              console.log(e.response)
              
            }
          } 
            
          }).catch(err=>{
            Alert.alert("Error",err.response.data.error.split(":")[2])})
        }
        else{
          Alert.alert("Error","Password must contain at least 6 characters")
        }
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
    <SafeAreaView>
    <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Register</Text> 
            </View>  
            <SafeAreaView style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={(email)=>setEmailRegister(email)}
                    value={emailRegister}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(pass)=>setPasswordRegister(pass)}
                    value={passwordRegister}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={{backgroundColor:'#494dff' , width:80 ,height:40, justifyContent:'center',borderRadius:50}} onPress={() =>handleSubmit()}>
                  <Text style={{alignSelf:'center', color:"#FFFFFF"}}>Register</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
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
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        
        
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

export default Register;