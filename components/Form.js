import React, {useEffect} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView, Button, Alert ,TouchableOpacity, Picker} from "react-native";
import Axios from 'axios'
import * as IntentLauncher from 'expo-intent-launcher';
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [address, setAddress] = React.useState("");
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
  const [skills, setSkills] = React.useState([]);
  const [skills1, setSkills1] = React.useState("");
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

  const [layout,setLayout] = React.useState("WETE")

  useEffect(() => {
    Alert.alert("Information","Enter your complete personal details!! With your School, College and Unversity information!! and Enter atleast 2 work experience/project!! As it give good impression ")
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
      address:address,
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
            console.log(res)
          } catch (e) {
            console.log(e)
            
          }
        } 
          
        }).catch(err=>{
          console.log(err.response) })

          let htmlContent;

  if(layout == "WETE"){
    if(experience3Title=="" && experience3Description=="" && startFromExperience3=="" && endToExperience3==""){
      htmlContent=  `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume/CV Design</title>
<link rel="stylesheet" href="styles.css">
<script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
</head>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");

* {
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
font-family: "Montserrat", sans-serif;
}

body {
background: #585c68;
font-size: 14px;
line-height: 22px;
color: #555555;
}

.bold {
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
}

.semi-bold {
font-weight: 500;
font-size: 16px;
}

.resume {
width: 800px;
height: auto;
display: flex;
margin: 50px auto;
}

.resume .resume_left {
width: 280px;
background: #0bb5f4;
}

.resume .resume_left .resume_content {
padding: 0 25px;
}

.resume .title {
margin-bottom: 20px;
}

.resume .resume_left .bold {
color: #fff;
}

.resume .resume_left .regular {
color: #b1eaff;
}

.resume .resume_item {
padding: 25px 0;
border-bottom: 2px solid #b1eaff;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
border-bottom: 0px;
}

.resume .resume_left ul li {
display: flex;
margin-bottom: 10px;
align-items: center;
}

.resume .resume_left ul li:last-child {
margin-bottom: 0;
}

.resume .resume_right .resume_hobby ul li i {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
color: #b1eaff;
}

.resume .resume_left .resume_skills ul li {
display: flex;
margin-bottom: 1px;
color: #b1eaff;
justify-content: space-between;
align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
width: 80%;
}

.resume .resume_left .resume_social .semi-bold {
color: #fff;
margin-bottom: 3px;
}

.resume .resume_right {
width: 520px;
background: #fff;
padding: 25px;
}

.resume .resume_right .bold {
color: #0bb5f4;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
padding-left: 40px;
overflow: hidden;
}

.resume .resume_right ul li {
position: relative;
}

.resume .resume_right ul li .date {
font-size: 16px;
font-weight: 500;
margin-bottom: 15px;
}

.resume .resume_right ul li .info {
margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
content: "";
position: absolute;
top: 5px;
left: -25px;
width: 6px;
height: 6px;
border-radius: 50%;
border: 2px solid #0bb5f4;
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
content: "";
position: absolute;
top: 14px;
left: -21px;
width: 2px;
height: 115px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul {
display: flex;
justify-content: space-between;
}

.resume .resume_right .resume_hobby ul li {
width: 80px;
height: 80px;
border: 2px solid #0bb5f4;
border-radius: 50%;
position: relative;
color: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li i {
font-size: 30px;
}

.resume .resume_right .resume_hobby ul li:before {
content: "";
position: absolute;
top: 40px;
right: -52px;
width: 50px;
height: 2px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li:last-child:before {
display: none;
}

</style>
<body>

<div class="resume">
<div class="resume_left">
<div class="resume_content">
 <div class="resume_item resume_info">
   <div class="title">
     <p class="bold">${name}</p>
     <p class="regular">${title}</p>
   </div>
   <ul>
     <li>
       <div class="data">
         ${address}
       </div>
     </li>
     <li>
       <div class="data">
         ${number}
       </div>
     </li>
     <li>
       <div class="data">
         ${email}
       </div>
     </li>
   </ul>
 </div>
 <div class="resume_item resume_skills">
   <div class="title">
     <p class="bold">Skills</p>
   </div>
   <ul>
   ${skills.map((val,index)=>{
    return `<li>
    <div class="skill_name">
      ${val}
    </div>
  </li>`
  })}
   </ul>
 </div>
</div>
</div>
<div class="resume_right">
<div class="resume_item resume_about">
  <div class="title">
     <p class="bold">About us</p>
   </div>
  <p>${objective}</p>
</div>
<div class="resume_item resume_work">
  <div class="title">
     <p class="bold">Work Experience/Project</p>
   </div>
  <ul>
      <li>
        <div class="date">${startFromExperience2} - ${endToExperience2}</div>
        <div class="info">
               <p class="semi-bold">${experience2Title}</p> 
            <p>${experience2Description}</p>
          </div>
      </li>
      <li>
          <div class="date">${startFromExperience1} - ${endToExperience1}</div> 
          <div class="info">
               <p class="semi-bold">${experience1Title}</p> 
            <p>${experience1Description}</p>
          </div>
      </li>
      
  </ul>
</div>
<div class="resume_item resume_education">
<div class="title">
     <p class="bold">Education</p>
   </div>
<ul>
      <li>
        <div class="date">${startFromUniversity} - ${endToUniversity}</div>
        <div class="info">
               <p class="semi-bold">${university}</p> 
          </div>
      </li>
      <li>
        <div class="date">${startFromCollege} - ${endToCollege}</div>
        <div class="info">
               <p class="semi-bold">${college}</p> 
          </div>
      </li>
      <li>
          <div class="date">${startFromSchool} - ${endToSchool}</div> 
          <div class="info">
               <p class="semi-bold">${school}</p>
          </div>
      </li>
  </ul>
</div>
</div>
</div>

</body>
</html>
`;
    }
    else{
      htmlContent=  `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume/CV Design</title>
<link rel="stylesheet" href="styles.css">
<script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
</head>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");

* {
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
font-family: "Montserrat", sans-serif;
}

body {
background: #585c68;
font-size: 14px;
line-height: 22px;
color: #555555;
}

.bold {
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
}

.semi-bold {
font-weight: 500;
font-size: 16px;
}

.resume {
width: 800px;
height: auto;
display: flex;
margin: 50px auto;
}

.resume .resume_left {
width: 280px;
background: #0bb5f4;
}

.resume .resume_left .resume_content {
padding: 0 25px;
}

.resume .title {
margin-bottom: 20px;
}

.resume .resume_left .bold {
color: #fff;
}

.resume .resume_left .regular {
color: #b1eaff;
}

.resume .resume_item {
padding: 25px 0;
border-bottom: 2px solid #b1eaff;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
border-bottom: 0px;
}

.resume .resume_left ul li {
display: flex;
margin-bottom: 10px;
align-items: center;
}

.resume .resume_left ul li:last-child {
margin-bottom: 0;
}

.resume .resume_right .resume_hobby ul li i {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
color: #b1eaff;
}

.resume .resume_left .resume_skills ul li {
display: flex;
margin-bottom: 10px;
color: #b1eaff;
justify-content: space-between;
align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
width: 25%;
}

.resume .resume_left .resume_social .semi-bold {
color: #fff;
margin-bottom: 3px;
}

.resume .resume_right {
width: 520px;
background: #fff;
padding: 25px;
}

.resume .resume_right .bold {
color: #0bb5f4;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
padding-left: 40px;
overflow: hidden;
}

.resume .resume_right ul li {
position: relative;
}

.resume .resume_right ul li .date {
font-size: 16px;
font-weight: 500;
margin-bottom: 15px;
}

.resume .resume_right ul li .info {
margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
content: "";
position: absolute;
top: 5px;
left: -25px;
width: 6px;
height: 6px;
border-radius: 50%;
border: 2px solid #0bb5f4;
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
content: "";
position: absolute;
top: 14px;
left: -21px;
width: 2px;
height: 115px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul {
display: flex;
justify-content: space-between;
}

.resume .resume_right .resume_hobby ul li {
width: 80px;
height: 80px;
border: 2px solid #0bb5f4;
border-radius: 50%;
position: relative;
color: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li i {
font-size: 30px;
}

.resume .resume_right .resume_hobby ul li:before {
content: "";
position: absolute;
top: 40px;
right: -52px;
width: 50px;
height: 2px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li:last-child:before {
display: none;
}

</style>
<body>

<div class="resume">
<div class="resume_left">
<div class="resume_content">
 <div class="resume_item resume_info">
   <div class="title">
     <p class="bold">${name}</p>
     <p class="regular">${title}</p>
   </div>
   <ul>
     <li>
       <div class="data">
         ${address}
       </div>
     </li>
     <li>
       <div class="data">
         ${number}
       </div>
     </li>
     <li>
       <div class="data">
         ${email}
       </div>
     </li>
   </ul>
 </div>
 <div class="resume_item resume_skills">
   <div class="title">
     <p class="bold">Skills</p>
   </div>
   <ul>
   ${skills.map((val,index)=>{
    return `<li>
    <div class="skill_name">
      ${val}
    </div>
  </li>`
  })}
   </ul>
 </div>
</div>
</div>
<div class="resume_right">
<div class="resume_item resume_about">
  <div class="title">
     <p class="bold">About us</p>
   </div>
  <p>${objective}</p>
</div>
<div class="resume_item resume_work">
  <div class="title">
     <p class="bold">Work Experience/Project</p>
   </div>
  <ul>
  <li>
  <div class="date">${startFromExperience3} - ${endToExperience3}</div>
  <div class="info">
         <p class="semi-bold">${experience3Title}</p> 
      <p>${experience3Description}</p>
    </div>
</li>
<li>
        <div class="date">${startFromExperience2} - ${endToExperience2}</div>
        <div class="info">
               <p class="semi-bold">${experience2Title}</p> 
            <p>${experience2Description}</p>
          </div>
      </li>
      <li>
          <div class="date">${startFromExperience1} - ${endToExperience1}</div> 
          <div class="info">
               <p class="semi-bold">${experience1Title}</p> 
            <p>${experience1Description}</p>
          </div>
      </li>
      
  </ul>
</div>
<div class="resume_item resume_education">
<div class="title">
     <p class="bold">Education</p>
   </div>
<ul>
      <li>
        <div class="date">${startFromUniversity} - ${endToUniversity}</div>
        <div class="info">
               <p class="semi-bold">${university}</p> 
          </div>
      </li>
      <li>
        <div class="date">${startFromCollege} - ${endToCollege}</div>
        <div class="info">
               <p class="semi-bold">${college}</p> 
          </div>
      </li>
      <li>
          <div class="date">${startFromSchool} - ${endToSchool}</div> 
          <div class="info">
               <p class="semi-bold">${school}</p>
          </div>
      </li>
  </ul>
</div>
</div>
</div>

</body>
</html>
`;
    }
    
  }

  if(layout == "ETWE"){
    if(experience3Title=="" && experience3Description=="" && startFromExperience3=="" && endToExperience3==""){
      htmlContent=  `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume/CV Design</title>
<link rel="stylesheet" href="styles.css">
<script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
</head>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");

* {
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
font-family: "Montserrat", sans-serif;
}

body {
background: #585c68;
font-size: 14px;
line-height: 22px;
color: #555555;
}

.bold {
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
}

.semi-bold {
font-weight: 500;
font-size: 16px;
}

.resume {
width: 800px;
height: auto;
display: flex;
margin: 50px auto;
}

.resume .resume_left {
width: 280px;
background: #0bb5f4;
}

.resume .resume_left .resume_content {
padding: 0 25px;
}

.resume .title {
margin-bottom: 20px;
}

.resume .resume_left .bold {
color: #fff;
}

.resume .resume_left .regular {
color: #b1eaff;
}

.resume .resume_item {
padding: 25px 0;
border-bottom: 2px solid #b1eaff;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
border-bottom: 0px;
}

.resume .resume_left ul li {
display: flex;
margin-bottom: 10px;
align-items: center;
}

.resume .resume_left ul li:last-child {
margin-bottom: 0;
}

.resume .icon i,
.resume .resume_right .resume_hobby ul li i {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
color: #b1eaff;
}

.resume .resume_left .resume_skills ul li {
display: flex;
margin-bottom: 10px;
color: #b1eaff;
justify-content: space-between;
align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
width: 25%;
}

.resume .resume_left .resume_social .semi-bold {
color: #fff;
margin-bottom: 3px;
}

.resume .resume_right {
width: 520px;
background: #fff;
padding: 25px;
}

.resume .resume_right .bold {
color: #0bb5f4;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
padding-left: 40px;
overflow: hidden;
}

.resume .resume_right ul li {
position: relative;
}

.resume .resume_right ul li .date {
font-size: 16px;
font-weight: 500;
margin-bottom: 15px;
}

.resume .resume_right ul li .info {
margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
content: "";
position: absolute;
top: 5px;
left: -25px;
width: 6px;
height: 6px;
border-radius: 50%;
border: 2px solid #0bb5f4;
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
content: "";
position: absolute;
top: 14px;
left: -21px;
width: 2px;
height: 115px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul {
display: flex;
justify-content: space-between;
}

.resume .resume_right .resume_hobby ul li {
width: 80px;
height: 80px;
border: 2px solid #0bb5f4;
border-radius: 50%;
position: relative;
color: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li i {
font-size: 30px;
}

.resume .resume_right .resume_hobby ul li:before {
content: "";
position: absolute;
top: 40px;
right: -52px;
width: 50px;
height: 2px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li:last-child:before {
display: none;
}

</style>
<body>

<div class="resume">
<div class="resume_left">
<div class="resume_content">
 <div class="resume_item resume_info">
   <div class="title">
     <p class="bold">${name}</p>
     <p class="regular">${title}</p>
   </div>
   <ul>
     <li>
       <div class="data">
         ${address}
       </div>
     </li>
     <li>
       <div class="data">
         ${number}
       </div>
     </li>
     <li>
       <div class="data">
         ${email}
       </div>
     </li>
   </ul>
 </div>
 <div class="resume_item resume_skills">
   <div class="title">
     <p class="bold">Skills</p>
   </div>
   <ul>
   ${skills.map((val,index)=>{
    return `<li>
    <div class="skill_name">
      ${val}
    </div>
  </li>`
  })}
   </ul>
 </div>
</div>
</div>
<div class="resume_right">
<div class="resume_item resume_about">
  <div class="title">
     <p class="bold">About us</p>
   </div>
  <p>${objective}</p>
</div>

<div class="resume_item resume_education">
<div class="title">
     <p class="bold">Education</p>
   </div>
<ul>
<li>
<div class="date">${startFromUniversity} - ${endToUniversity}</div>
<div class="info">
       <p class="semi-bold">${university}</p> 
  </div>
</li>
<li>
<div class="date">${startFromCollege} - ${endToCollege}</div>
<div class="info">
       <p class="semi-bold">${college}</p> 
  </div>
</li>
      <li>
          <div class="date">${startFromSchool} - ${endToSchool}</div> 
          <div class="info">
               <p class="semi-bold">${school}</p>
          </div>
      </li>
      
      
      
  </ul>
</div>
<div class="resume_item resume_work">
  <div class="title">
     <p class="bold">Work Experience/Project</p>
   </div>
  <ul>
<li>
        <div class="date">${startFromExperience2} - ${endToExperience2}</div>
        <div class="info">
               <p class="semi-bold">${experience2Title}</p> 
            <p>${experience2Description}</p>
          </div>
      </li>
      <li>
          <div class="date">${startFromExperience1} - ${endToExperience1}</div> 
          <div class="info">
               <p class="semi-bold">${experience1Title}</p> 
            <p>${experience1Description}</p>
          </div>
      </li>
      
      
  </ul>
</div>
</div>
</div>

</body>
</html>
`;
    }
    else{
      htmlContent=  `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume/CV Design</title>
<link rel="stylesheet" href="styles.css">
<script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
</head>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");

* {
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
font-family: "Montserrat", sans-serif;
}

body {
background: #585c68;
font-size: 14px;
line-height: 22px;
color: #555555;
}

.bold {
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
}

.semi-bold {
font-weight: 500;
font-size: 16px;
}

.resume {
width: 800px;
height: auto;
display: flex;
margin: 50px auto;
}

.resume .resume_left {
width: 280px;
background: #0bb5f4;
}

.resume .resume_left .resume_content {
padding: 0 25px;
}

.resume .title {
margin-bottom: 20px;
}

.resume .resume_left .bold {
color: #fff;
}

.resume .resume_left .regular {
color: #b1eaff;
}

.resume .resume_item {
padding: 25px 0;
border-bottom: 2px solid #b1eaff;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
border-bottom: 0px;
}

.resume .resume_left ul li {
display: flex;
margin-bottom: 10px;
align-items: center;
}

.resume .resume_left ul li:last-child {
margin-bottom: 0;
}

.resume .icon i,
.resume .resume_right .resume_hobby ul li i {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
color: #b1eaff;
}

.resume .resume_left .resume_skills ul li {
display: flex;
margin-bottom: 10px;
color: #b1eaff;
justify-content: space-between;
align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
width: 25%;
}


.resume .resume_left .resume_social .semi-bold {
color: #fff;
margin-bottom: 3px;
}

.resume .resume_right {
width: 520px;
background: #fff;
padding: 25px;
}

.resume .resume_right .bold {
color: #0bb5f4;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
padding-left: 40px;
overflow: hidden;
}

.resume .resume_right ul li {
position: relative;
}

.resume .resume_right ul li .date {
font-size: 16px;
font-weight: 500;
margin-bottom: 15px;
}

.resume .resume_right ul li .info {
margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
content: "";
position: absolute;
top: 5px;
left: -25px;
width: 6px;
height: 6px;
border-radius: 50%;
border: 2px solid #0bb5f4;
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
content: "";
position: absolute;
top: 14px;
left: -21px;
width: 2px;
height: 115px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul {
display: flex;
justify-content: space-between;
}

.resume .resume_right .resume_hobby ul li {
width: 80px;
height: 80px;
border: 2px solid #0bb5f4;
border-radius: 50%;
position: relative;
color: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li i {
font-size: 30px;
}

.resume .resume_right .resume_hobby ul li:before {
content: "";
position: absolute;
top: 40px;
right: -52px;
width: 50px;
height: 2px;
background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li:last-child:before {
display: none;
}

</style>
<body>

<div class="resume">
<div class="resume_left">
<div class="resume_content">
 <div class="resume_item resume_info">
   <div class="title">
     <p class="bold">${name}</p>
     <p class="regular">${title}</p>
   </div>
   <ul>
     <li>
       <div class="data">
         ${address}
       </div>
     </li>
     <li>
       <div class="data">
         ${number}
       </div>
     </li>
     <li>
       <div class="data">
         ${email}
       </div>
     </li>
   </ul>
 </div>
 <div class="resume_item resume_skills">
   <div class="title">
     <p class="bold">Skills</p>
   </div>
   <ul>
   ${skills.map((val,index)=>{
    return `<li>
    <div class="skill_name">
      ${val}
    </div>
  </li>`
  })}
   </ul>
 </div>
</div>
</div>
<div class="resume_right">
<div class="resume_item resume_about">
  <div class="title">
     <p class="bold">About us</p>
   </div>
  <p>${objective}</p>
</div>

<div class="resume_item resume_education">
<div class="title">
     <p class="bold">Education</p>
   </div>
<ul>
<li>
<div class="date">${startFromUniversity} - ${endToUniversity}</div>
<div class="info">
       <p class="semi-bold">${university}</p> 
  </div>
</li>
<li>
<div class="date">${startFromCollege} - ${endToCollege}</div>
<div class="info">
       <p class="semi-bold">${college}</p> 
  </div>
</li>
      <li>
          <div class="date">${startFromSchool} - ${endToSchool}</div> 
          <div class="info">
               <p class="semi-bold">${school}</p>
          </div>
      </li>
      
      
      
  </ul>
</div>
<div class="resume_item resume_work">
  <div class="title">
     <p class="bold">Work Experience/Project</p>
   </div>
  <ul>
  <li>
  <div class="date">${startFromExperience3} - ${endToExperience3}</div>
  <div class="info">
         <p class="semi-bold">${experience3Title}</p> 
      <p>${experience3Description}</p>
    </div>
</li>
<li>
        <div class="date">${startFromExperience2} - ${endToExperience2}</div>
        <div class="info">
               <p class="semi-bold">${experience2Title}</p> 
            <p>${experience2Description}</p>
          </div>
      </li>
      <li>
          <div class="date">${startFromExperience1} - ${endToExperience1}</div> 
          <div class="info">
               <p class="semi-bold">${experience1Title}</p> 
            <p>${experience1Description}</p>
          </div>
      </li>
      
      
  </ul>
</div>
</div>
</div>

</body>
</html>
`;
    }
    
  }
        
      
      
      
      
      const createPDF = async (html) => {
        try {
            const { uri } = await Print.printToFileAsync({ html });     
              return uri
        }
            catch (err) {
           // console.error(err);
        }
      };
      
      
      FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+name,{intermediates:true}).then(res=>{console.log(res)}).catch(err=>console.log(err))
      
      
      
      
      createPDF(htmlContent).then(data=>{
      
       
       
        
        
        FileSystem.getContentUriAsync(data).then(cUri => {
          console.log(cUri);
          IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
            data: cUri,
            flags: 1,
          }).then(data1=>{console.log(data1)});
        });
        
        
        
      
      })
      
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
        testID="usernameId"
      />
      <TextInput
        style={styles.input}
        onChangeText={(email)=>setEmail(email)}
        value={email}
        placeholder="Email"
        testID="emailId"
      />
      <TextInput
        style={styles.input}
        onChangeText={(add)=>setAddress(add)}
        value={address}
        placeholder="Address"
        testID="addressId"
      />
      <TextInput
        style={styles.input}
        onChangeText={(num)=>setNumber(num)}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
        testID="numberId"
      />
      <TextInput
        style={styles.input}
        onChangeText={(title)=>setTitle(title)}
        value={title}
        placeholder="Title"
        testID="titleId"
      />
      <TextInput
        style={styles.input}
        onChangeText={(obj)=>setObjective(obj)}
        value={objective}
        placeholder="Objective"
        testID="objectiveId"
      />
      <TextInput
        style={styles.input}
        onChangeText={(sch)=>setSchool(sch)}
        value={school}
        placeholder="School"
        testID="schoolId"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startS)=>setStartFromSchool(startS)}
        value={startFromSchool}
        placeholder="Start Year"
        testID="schoolStartId"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endS)=>setEndToSchool(endS)}
        value={endToSchool}
        placeholder="End Year"
        testID="schoolEndId"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(coll)=>setCollege(coll)}
        value={college}
        placeholder="College"
        testID="collegeId"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startC)=>setStartFromCollege(startC)}
        value={startFromCollege}
        placeholder="Start Year"
        testID="collegeStartId"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endC)=>setEndToCollege(endC)}
        value={endToCollege}
        placeholder="End Year"
        testID="collegeEndId"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(uni)=>setUniversity(uni)}
        value={university}
        placeholder="University"
        testID="universityId"
      />
      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startU)=>setStartFromUniversity(startU)}
        value={startFromUniversity}
        placeholder="Start Year"
        testID="uniStartId"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endU)=>setEndToUniversity(endU)}
        value={endToUniversity}
        placeholder="End Year"
        testID="uniEndId"
      />
      </View>

      <TextInput
        style={styles.input}
        testID="skillsId"
        value={skills1}
        onChangeText={(skill)=>{const sk1 = skill.split(',');
      let skill1=[]
      sk1.map((val,index)=>{if(val!==""){skill1.push(val)}

    })
      setSkills(skill1);
      setSkills1(skill)
      }}
        placeholder="Skills (C, C++ etc)"
      />

      <TextInput
        style={styles.input}
        onChangeText={(exp1Title)=>setExperience1Title(exp1Title)}
        value={experience1Title}
        placeholder="Experience 1 Title"
        testID="exp1TitleId"
      />

      <TextInput
        style={styles.input}
        onChangeText={(exp1Desc)=>setExperience1Description(exp1Desc)}
        value={experience1Description}
        placeholder="Experience 1 Description"
        testID="exp1DescId"
      />

      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startE1)=>setStartFromExperience1(startE1)}
        value={startFromExperience1}
        placeholder="Month Year"
        testID="exp1StartId"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endE1)=>setEndToExperience1(endE1)}
        value={endToExperience1}
        placeholder="Month Year"
        testID="exp1EndId"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(exp2Title)=>setExperience2Title(exp2Title)}
        value={experience2Title}
        placeholder="Experience 2 Title"
        testID="exp2TitleId"
      />

      <TextInput
        style={styles.input}
        onChangeText={(exp2Desc)=>setExperience2Description(exp2Desc)}
        value={experience2Description}
        placeholder="Experience 2 Description"
        testID="exp2DescId"
      />

      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startE2)=>setStartFromExperience2(startE2)}
        value={startFromExperience2}
        placeholder="Month Year"
        testID="exp2StartId"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endE2)=>setEndToExperience2(endE2)}
        value={endToExperience2}
        placeholder="Month Year"
        testID="exp2EndId"
      />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(exp3Title)=>setExperience3Title(exp3Title)}
        value={experience3Title}
        placeholder="Experience 3 Title"
        testID="exp3TitleId"
      />

      <TextInput
        style={styles.input}
        onChangeText={(exp3Desc)=>setExperience3Description(exp3Desc)}
        value={experience3Description}
        placeholder="Experience 3 Description"
        testID="exp3DescId"
      />

      <View style={{ flexDirection:'row' }}>
      <TextInput
        style={styles.inputInline}
        onChangeText={(startE3)=>setStartFromExperience3(startE3)}
        value={startFromExperience3}
        placeholder="Month Year"
        testID="exp3StartId"
      />
      <TextInput
        style={styles.inputInline}
        onChangeText={(endE3)=>setEndToExperience3(endE3)}
        value={endToExperience3}
        placeholder="Month Year"
        testID="exp3EndId"
      />
      </View>

      <Text style={styles.layoutStyle}>Select Layout!!</Text>
      <Picker
        selectedValue={layout}
        style={{ height: 50, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setLayout(itemValue)}
      >
        <Picker.Item label="Work Experience Than Education" value="WETE" />
        <Picker.Item label="Education Than Work Experience" value="ETWE" />
      </Picker>

      <TouchableOpacity testID="ButtonId" style={{backgroundColor:'#494dff' , width:80 ,height:40, justifyContent:'center',borderRadius:50}} onPress={() =>{ 
        if(name==""){
          Alert.alert("Error","Please eneter your name")
        }
        else if(email==""){
          Alert.alert("Error","Please Enter Your Email")
        }
        
        handleSubmit()}}>
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
  layoutStyle:{
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
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