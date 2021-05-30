import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView, Button, Alert } from "react-native";

const Form = () => {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [title, onChangeTitle] = React.useState("");
  const [school, onChangeSchool] = React.useState("");
  const [startFromSchool, onChangeStartFromSchool] = React.useState("");
  const [endToSchool, onChangeEndToSchool] = React.useState("");
  const [college, onChangeCollege] = React.useState("");
  const [startFromCollege, onChangeStartFromCollege] = React.useState("");
  const [endToCollege, onChangeEndToCollege] = React.useState("");
  const [university, onChangeUniversity] = React.useState("");
  const [startFromUniversity, onChangeStartFromUniversity] = React.useState("");
  const [endToUniversity, onChangeEndToUniversity] = React.useState("");
  const [master, onChangeMaster] = React.useState("");
  const [startFromMaster, onChangeStartFromMaster] = React.useState("");
  const [endToMaster, onChangeEndToMaster] = React.useState("");
  const [skills, onChangeSkills] = React.useState("");


  return (
    <View style={styles.container}>
      <ScrollView>
    <View style={styles.header}>
            <Text style={styles.title}>Resume Form</Text> 

    </View>  
    <SafeAreaView style={styles.body}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSchool}
        value={school}
        placeholder="School"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeStartFromSchool}
        value={startFromSchool}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeEndToSchool}
        value={endToSchool}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeCollege}
        value={college}
        placeholder="College"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeStartFromCollege}
        value={startFromCollege}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeEndToCollege}
        value={endToCollege}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeUniversity}
        value={university}
        placeholder="University"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeStartFromUniversity}
        value={startFromUniversity}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeEndToUniversity}
        value={endToUniversity}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeMaster}
        value={master}
        placeholder="Master"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeStartFromMaster}
        value={startFromMaster}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={onChangeEndToMaster}
        value={endToMaster}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeSkills}
        value={skills}
        placeholder="Skills"
      />

      <Button
        style= {styles.buttonSubmit}
        title="Submit"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      
    </SafeAreaView>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  world:{
    marginTop: 40,
    height: 40,
    margin: 12,
    width:250,
    borderWidth: 1
  },
  container:{
    backgroundColor: 'white'
  },
  header:{
    height: 80,
    paddingTop: 38,
    backgroundColor: '#2D3748',
    alignItems: 'center',
    
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
  inputInline: {
    height: 40,
    margin: 12,
    width: 113,
    borderWidth: 1,
    textAlign: 'center'
  },
  buttonSubmit: {
      height: 40,
      margin: 12,
      paddingTop: 20,
      width: 250,
      borderWidth: 1,
      textAlign: 'center',
      backgroundColor: '#2D3748'
  }
});

export default Form;