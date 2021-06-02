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
  const [experience1Title, setExperience1Title] = React.useState("");
  const [experience1Description, setExperience1Description] = React.useState("");
  const [startFromExperience1, setStartFromExperience1] = React.useState("");
  const [endToExperience1, setEndToExperience1] = React.useState("");
  const [experience2Title, setExperience2Title] = React.useState("");
  const [experience2Description, setExperience2Description] = React.useState("");
  const [startFromExperience2, setStartFromExperience2] = React.useState("");
  const [endToExperience2, setEndToExperience2] = React.useState("");
  const [experience3Title, setExperience3Title] = React.useState("");
  const [experience3Description, setExperience3Description] = React.useState("");
  const [startFromExperience3, setStartFromExperience3] = React.useState("");
  const [endToExperience3, setEndToExperience3] = React.useState("");
  const [data1,setData1] = React.useState({})

  useEffect(() => {
    AsyncStorage.getItem('id').then(user =>{
      if(user)
      {
        console.log(user)
        setId(user)
          console.log(user.data)
         setData1(user.data)
      }
    })
     
  }, [])


  const handleSubmit = async()=>{

    if(name==""){
      Alert.alert("Error","Please Enter Your Name")
    }
    if(email==""){
      Alert.alert("Error","Please Enter Your Email")
    }
    if(title==""){
      Alert.alert("Error","Please Enter Title")
    }
    if(objective==""){
      Alert.alert("Error","Please Enter Objective")
    }
    if(number==""){
      Alert.alert("Error","Please Enter Your Phone Number")
    }
    if(skills.length==0){
      Alert.alert("Error","Please Enter Your Skills")
    }
    if(school==""){
      Alert.alert("Error","Please Enter Your School Name")
    }
    if(school!=""){
      if(startFromUniversity==""){
        Alert.alert("Error","Please Enter Start-Date of University")
      }
      if(endToUniversity==""){
        Alert.alert("Error","Please Enter End-Date of University")
      }
    }

    if(college==""){
      Alert.alert("Error","Please Enter Your College Name")
    }
    if(college!=""){
      if(startFromCollege==""){
        Alert.alert("Error","Please Enter Start-Date of College")
      }
      if(endToCollege==""){
        Alert.alert("Error","Please Enter End-Date of College")
      }
    }

    if(university==""){
      Alert.alert("Error","Please Enter Your University Name")
    }
    if(university!=""){
      if(startFromSchool==""){
        Alert.alert("Error","Please Enter Start-Date of School")
      }
      if(endToSchool==""){
        Alert.alert("Error","Please Enter End-Date of School")
      }
    }
    

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
      user:userId,
      experience1Title:experience1Title,
      experience1Description:experience1Description,
      dateFromExp1:startFromExperience1,
      dateToExp1:endToExperience1,
      experience2Title:experience2Title,
      experience2Description:experience2Description,
      dateFromExp2:startFromExperience2,
      dateToExp2:endToExperience2,
      experience3Title:experience3Title,
      experience3Description:experience3Description,
      dateFromExp3:startFromExperience3,
      dateToExp3:endToExperience3 
    }
        
    Axios.post("http://192.168.0.101:8088/api/resume/create",resume).then(async(res)=>{
        if(res){
          try {
            
            Alert.alert("Success","Form Added Successfully")
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

      <TextInput
        style={styles.input}
        onChangeText={(exp1Title)=>setExperience1Title(exp1Title)}
        value={experience1Title}
        placeholder="Experience 1 Title"
      />

      <TextInput
        style={styles.input}
        onChangeText={(exp1Desc)=>setExperience1Description(exp1Desc)}
        value={experience1Description}
        placeholder="Experience 1 Description"
      />

      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startE1)=>setStartFromExperience1(startE1)}
        value={startFromExperience1}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endE1)=>setEndToExperience1(endE1)}
        value={endToExperience1}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(exp2Title)=>setExperience2Title(exp2Title)}
        value={experience2Title}
        placeholder="Experience 2 Title"
      />

      <TextInput
        style={styles.input}
        onChangeText={(exp2Desc)=>setExperience2Description(exp2Desc)}
        value={experience2Description}
        placeholder="Experience 2 Description"
      />

      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startE2)=>setStartFromExperience2(startE2)}
        value={startFromExperience2}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endE2)=>setEndToExperience2(endE2)}
        value={endToExperience2}
        placeholder="EndTo"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(exp3Title)=>setExperience3Title(exp3Title)}
        value={experience3Title}
        placeholder="Experience 3 Title"
      />

      <TextInput
        style={styles.input}
        onChangeText={(exp3Desc)=>setExperience3Description(exp3Desc)}
        value={experience3Description}
        placeholder="Experience 3 Description"
      />

      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startE3)=>setStartFromExperience3(startE3)}
        value={startFromExperience3}
        placeholder="StartFrom"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endE3)=>setEndToExperience3(endE3)}
        value={endToExperience3}
        placeholder="EndTo"
      />
      </View>

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