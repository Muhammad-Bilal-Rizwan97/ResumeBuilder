import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Alert ,TouchableOpacity} from 'react-native';

function Register({navigation}) {
    const [emailRegister, setEmailRegister] = React.useState("");
    const [passwordRegister, setPasswordRegister] = React.useState("");

  return (
    <SafeAreaView>
    <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Register</Text> 
            </View>  
            <SafeAreaView style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmailRegister}
                    value={emailRegister}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPasswordRegister}
                    value={passwordRegister}
                    placeholder="Password"
                />
                <TouchableOpacity style={{backgroundColor:'#494dff' , width:80 ,height:40, justifyContent:'center',borderRadius:50}} onPress={() => navigation.navigate("Login")}>
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