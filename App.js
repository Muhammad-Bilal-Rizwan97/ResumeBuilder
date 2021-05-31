import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerTitle:null,
          headerStyle:{backgroundColor:"#2D3748",elevation:0}
          
        }}/>
        <Stack.Screen name="Register" component={Register} options={{
          headerTitle:null,
          headerStyle:{backgroundColor:"#2D3748",elevation:0}
          
        }}/>
        <Stack.Screen name="Form" component={Form} options={{
          headerTitle:null,
          headerStyle:{backgroundColor:"#2D3748",elevation:0}
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
