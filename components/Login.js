import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Alert } from 'react-native';

function Login() {
    const [emailLogin, setEmailLogin] = React.useState("");
    const [passwordLogin, setPasswordLogin] = React.useState("");

  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}>Login</Text> 
                <Button
                    color= "#4A5568"
                    title = "Register"
                />
                </View>

            </View>  
            <SafeAreaView style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmailLogin}
                    value={emailLogin}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPasswordLogin}
                    value={passwordLogin}
                    placeholder="Password"
                />
                <Button
                style={{ width:250}}
                title="Login"
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
        textAlign: 'right',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: "40%"
    
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

export default Login;