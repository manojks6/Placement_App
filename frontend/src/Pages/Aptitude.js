import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../CSS/Aptitude.css";
import axios from "axios";

function Aptitude() {
   const [aptiQustions, setAptiQustions] = useState([]);
   useEffect(() => {
      axios
         .get("http://localhost:8000/aptitude")
         .then((res) => {
            console.log(res);
            setAptiQustions(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div>
         <div className="Aptitude_Navbar">
            <Navbar />
         </div>
         <div className="Aptitude_Body">
            <div className="heading">

            </div>
            <div className="content">
               <Link to="/Problems on Numbers">Problems on Numbers</Link>
               <Link to="/Problems on Trains">Problems on Trains</Link>
               <Link to="/Compound Interest and Simple Interest">Compound Interest and Simple Interest</Link>
               <Link to="/Problems on H.C.F and L.C.M">Problems on H.C.F and L.C.M</Link>
               <Link to="/Profit and Loss">Profit and Loss</Link>
               <Link to="/Average">Average</Link>
               <Link to="/Permutation and Combination">Permutation and Combination</Link>
               <Link to="/Probability">Probability</Link>
               <Link to="/aptitude:Time and Distance">Time and Distance</Link>
            
            </div>
            <div className="content">
               <Link to="/">about</Link>
               <Link to="/">about</Link>
               <Link to="/hhh">about</Link>
               <Link to="/">about</Link>
               <Link to="/hhh">about</Link>
               <Link to="/hhh">about</Link>
            </div>
            <div className="content">
               <Link to="/">about</Link>
               <Link to="/">about</Link>
               <Link to="/hhh">about</Link>
               <Link to="/">about</Link>
               <Link to="/hhh">about</Link>
               <Link to="/hhh">about</Link>
            </div>
         </div>

         <div>
            <Routes>
               <Route path="/mmm" element={<Navbar />} />
               <Route path="/mmm" element={<Navbar />} />
               <Route path="/mmm" element={<Navbar />} />
            </Routes>
         </div>
      </div>
   );
}

export default Aptitude;
