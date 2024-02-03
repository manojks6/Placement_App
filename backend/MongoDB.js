const mongoose=require('mongoose')
const connectDB=async()=>{
     try{
          const connect =await mongoose.connect("mongodb+srv://root:1234@cluster0.ykchgar.mongodb.net/test?retryWrites=true&w=majority");
          console.log("Mongo Connected");
     }
     catch(err){
          console.log(err);
          process.exit(1);
     }
};

module.exports=connectDB;