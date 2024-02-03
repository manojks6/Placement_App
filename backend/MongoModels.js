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
const aptiModel= mongoose.model('aptiModel',apti)
module.exports=aptiModel;