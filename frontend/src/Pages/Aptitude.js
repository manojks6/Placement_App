import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../CSS/Aptitude.css";
import axios from "axios";
function Aptitude() {
   const [aptiQustions, setAptiQustions] = useState([]);
   useEffect(() => {
      axios
         .get("http://localhost:8000/aptitude")
         .then((res) => {
            //console.log(res);
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
            <div className="content">
               <h3> Topics</h3>
               {aptiQustions.map((i, j) => (
                  <div className="items">
                     <div className="link">
                        <Link to={`/aptitude/:${(i, j)}`}>{i.name}</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div></div>
      </div>
   );
}

export default Aptitude;
