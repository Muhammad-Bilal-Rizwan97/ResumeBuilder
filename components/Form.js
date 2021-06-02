import React, {useEffect} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView, Button, Alert ,TouchableOpacity} from "react-native";
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [objective, setObjective] = React.useState("");
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
  const [userId, setId] = React.useState("");

  useEffect(() => {
    AsyncStorage.getItem('id').then(user =>{
      if(user)
      {
        console.log(user)
        setId(user)
      }
    })
     
  }, [])

  const handleSubmit = async()=>{

    const resume = {
      username:name,
      email:email,
      title:title,
      description:objective,
      phone:number,
      skills:skills,
      school:school,
      dateFromS:startFromSchool,
      dateToS:endToSchool,
      highSchool:college,
      dateFromH:startFromCollege,
      dateToH:endToCollege,
      university:university,
      dateFromU:startFromUniversity,
      dateToU:endToUniversity,
      masters:master,
      dateFromM:startFromMaster,
      dateToM:endToMaster,
      user:userId
    }
        Axios.post("http://192.168.0.101:8088/api/resume/create",resume).then(async(res)=>{

        if(res){
          try {
            
            Alert.alert("Success","Form Successfully")
          } catch (e) {
            console.log(e)
            
          }
        } 
          
        }).catch(err=>{
          console.log(err.response) })
      
  }

  return (
    <View style={styles.container}>
      <ScrollView>
    <View style={styles.header}>
            <Text style={styles.title}>Resume Form</Text> 

    </View>  
    <SafeAreaView style={styles.body}>
      <TextInput
        style={styles.input}
        onChangeText={(name)=>setName(name)}
        value={name}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(title)=>setTitle(title)}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={(obj)=>setObjective(obj)}
        value={objective}
        placeholder="Objective"
      />
      <TextInput
        style={styles.input}
        onChangeText={(email)=>setEmail(email)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(num)=>setNumber(num)}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(sch)=>setSchool(sch)}
        value={school}
        placeholder="School"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startS)=>setStartFromSchool(startS)}
        value={startFromSchool}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endS)=>setEndToSchool(endS)}
        value={endToSchool}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(coll)=>setCollege(coll)}
        value={college}
        placeholder="College"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startC)=>setStartFromCollege(startC)}
        value={startFromCollege}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endC)=>setEndToCollege(endC)}
        value={endToCollege}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(uni)=>setUniversity(uni)}
        value={university}
        placeholder="University"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startU)=>setStartFromUniversity(startU)}
        value={startFromUniversity}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endU)=>setEndToUniversity(endU)}
        value={endToUniversity}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(mas)=>setMaster(mas)}
        value={master}
        placeholder="Master"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startM)=>setStartFromMaster(startM)}
        value={startFromMaster}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endM)=>setEndToMaster(endM)}
        value={endToMaster}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(skill)=>setSkills(skill)}
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