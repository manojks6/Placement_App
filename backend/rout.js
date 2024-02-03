const express = require("express");
const expressHandler=require('express-async-handler');
const router=express.Router();
router.route('/dsa').get(
     expressHandler(async (req,res)=>{
     res.json({msg:"DsaPage"});
}));
router.route('/aptitude').get(
     expressHandler(async (req,res)=>{
     res.json({msg:"AptiPage"})
}));
router.route('/home').get(
     expressHandler(async (req,res)=>{
     res.json({msg:"HomePage"})
}));
module.exports=router;
