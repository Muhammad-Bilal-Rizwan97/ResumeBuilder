import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Alert } from 'react-native';

function Register() {
    const [emailRegister, setEmailRegister] = React.useState("");
    const [passwordRegister, setPasswordRegister] = React.useState("");

  return (
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
                <Button
                style={{ width:250}}
                title="Register"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white'
      },
      header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: '#2D3748'
        
      },
      title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
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
        textAlign: 'center'
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