import React from "react";
import Navbar from "../Components/Navbar";
import '../CSS/Dsa.css'
// import axios from 'axios'
// import { useState,useEffect } from 'react';
function Dsa() {
  // const[data,setData]=useState([]);
  // useEffect(()=>{
  //   axios.get("").then(res=>{
  //     setData(res.data);
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // },[])
  return (
    <div>
      <div className="Dsa_Navbar">
        <Navbar />
      </div>
      <div className="Dsa_Body">
        <h1>Coding/DSA</h1>
      </div>
    </div>
  );
}

export default Dsa;
