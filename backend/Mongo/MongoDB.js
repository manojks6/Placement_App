const mongoose=require('mongoose')
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;
const {A,DsaModel}=require("./MongoModels");
const connectDB=async()=>{
     try{
          const connect =await mongoose.connect(databaseUrl);
          console.log("Mongo Connected");
     }
     catch(err){
          console.log(err);
          process.exit(1);
     }
};

module.exports=connectDB;