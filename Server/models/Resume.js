const mongoose = require('mongoose')
const crypto = require('crypto')
const {v1 : uuidv1} = require('uuid')

const {ObjectId} = mongoose.Schema
const resumeSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    maxlength:32
  },
  email:{
    type:String,
    trim:true,
    required:true,
    unique:false
    
  },
  title:{
    type:String,
    
  },
  address:{
    type:String,

  },
 description:{
    type:String,

  },
  phone:{
    type:String,
  },
  skills:{
    type:Array,
  },
  dateFromS:{
    type:String,
    default:"09/2021"
  },
  dateToS:{
    type:String,
    default:"09/2021"
  },
  dateFromU:{
    type:String,
    default:"09/2021"
  },
  dateToU:{
    type:String,
    default:"09/2021"
  },
  dateFromM:{
    type:String,
    default:"09/2021"
  },
  dateToM:{
    type:String,
    default:"09/2021"
  },
  dateFromH:{
    type:String,
    default:"09/2021"
  },
  dateToH:{
    type:String,
    default:"09/2021"
  },
  school:{
    type:String
  },
  highSchool:{
    type:String
  },
  university:{
    type:String
  },
  masters:{
    type:String
  },
  experience1Title:{
    type:String,
    
  },
  experience1Description:{
    type:String,
    
  },
  dateFromExp1:{
    type:String,
    default:"09/2021"
  },
  dateToExp1:{
    type:String,
    default:"09/2021"
  },
  experience2Title:{
    type:String,
    
  },
  experience2Description:{
    type:String,
    
  },
  dateFromExp2:{
    type:String,
    default:"09/2021"
  },
  dateToExp2:{
    type:String,
    default:"09/2021"
  },
  experience3Title:{
    type:String,
    
  },
  experience3Description:{
    type:String,
    
  },
  dateFromExp3:{
    type:String,
    default:"09/2021"
  },
  dateToExp3:{
    type:String,
    default:"09/2021"
  },
  user:{
    type:ObjectId,
    ref:'User',
   required:true
  }

},{timestamps:true})



module.exports = mongoose.model("Resume",resumeSchema);