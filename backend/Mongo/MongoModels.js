const mongoose=require('mongoose')
const apti=new mongoose.Schema({
     qustion:{
          type:String,
          required:true
     },
     answer:{
          type:String,
          required:true
     }
})
const listOfAptiTopics=new mongoose.Schema({
     type:{
          type:String,
          required:true
     },
     name:{
          type:String,
          required:true
     }
})
const aptiModel= mongoose.model('aptiModel',apti)
const listOfAptiTopicsModel=mongoose.model('listOfAptiTopicsModel',listOfAptiTopics)
module.exports={aptiModel,listOfAptiTopicsModel};