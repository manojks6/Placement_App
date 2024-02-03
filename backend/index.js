const express=require('express');
const app=express();
const routs=require('./rout')
const mongo=require('./MongoDB')
// mongo();
app.use(routs);
app.listen(8000,(req,res)=>{
     console.log("Listning at : 8000")
});