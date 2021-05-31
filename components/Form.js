import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView, Button, Alert ,TouchableOpacity} from "react-native";

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [startFromSchool, setStartFromSchool] = React.useState("");
  const [endToSchool, setEndToSchool] = React.useState("");
  const [college, setCollege] = React.useState("");
  const [startFromCollege, setStartFromCollege] = React.useState("");
  const [endToCollege, setEndToCollege] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [startFromUniversity, setStartFromUniversity] = React.useState("");
  const [endToUniversity, setEndToUniversity] = React.useState("");
  const [master, setMaster] = React.useState("");
  const [startFromMaster, setStartFromMaster] = React.useState("");
  const [endToMaster, setEndToMaster] = React.useState("");
  const [skills, setSkills] = React.useState("");


  return (
    <View style={styles.container}>
      <ScrollView>
    <View style={styles.header}>
            <Text style={styles.title}>Resume Form</Text> 

    </View>  
    <SafeAreaView style={styles.body}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSchool}
        value={school}
        placeholder="School"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={setStartFromSchool}
        value={startFromSchool}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={setEndToSchool}
        value={endToSchool}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setCollege}
        value={college}
        placeholder="College"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={setStartFromCollege}
        value={startFromCollege}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={setEndToCollege}
        value={endToCollege}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setUniversity}
        value={university}
        placeholder="University"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={setStartFromUniversity}
        value={startFromUniversity}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={setEndToUniversity}
        value={endToUniversity}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setMaster}
        value={master}
        placeholder="Master"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={setStartFromMaster}
        value={startFromMaster}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={setEndToMaster}
        value={endToMaster}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setSkills}
        value={skills}
        placeholder="Skills"
      />

      <TouchableOpacity style={{backgroundColor:'#494dff' , width:80 ,height:40, justifyContent:'center',borderRadius:50}} onPress={() =>{ handleSubmit()}}>
        <Text style={{alignSelf:'center', color:"#FFFFFF"}}>Submit</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
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
    textAlign: 'center',
    borderRadius:50,
    borderColor:'red'
  
  },
  inputInline: {
    height: 40,
   margin:12,
    width: 113,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius:50,
    borderColor:'red'
  },
  buttonSubmit: {
      height: 40,
      margin: 12,
      paddingTop: 20,
      width: 250,
      borderWidth: 1,
      textAlign: 'center',
      backgroundColor: '#2D3748',

  }
});

export default Form;