const mongoose=require('mongoose')
const connectDB=async()=>{
     try{
          const connect =await mongoose.connect("");
          console.log("Mongo Connected");
     }
     catch(err){
          console.log(err);
          process.exit(1);
     }
};

module.exports=connectDB;