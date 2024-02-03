const express=require('express');
const app=express();
const cors=require('cors')
const routs=require('./rout')
const mongo=require('./MongoDB')
const aptiModel=require('./MongoModels')
mongo();
app.listen(8000,async (req,res)=>{
     console.log("Listning at : 8000")
});
app.use(cors());
app.use(express.json());
app.use(routs);
//const u= async ()=>{await aptiModel.insertMany([{qustion:"what is that?",answer:"laptop"}])}




