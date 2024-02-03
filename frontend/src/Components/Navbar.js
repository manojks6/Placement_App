import React from "react";
import "../CSS/Navbar.css";
function Navbar() {
   return (
      <div className="navbar">
         <a href="/" className="logo">
            <img
               src="https://www.placementpreparation.io/images/placement-preparation/placement-preparation-logo.svg"
               alt="Logo"
            ></img>
         </a>
         <div className="menu">
            <ul>
               <a href="/">Home</a>
               <a href="/aptitude">Aptitude</a>
               <a href="/dsa">Coding</a>
               <a href="/resources">Resources</a>
               <a href="#" className="button">
                  <input type="text" placeholder="Any Questions"></input>
                  <button>Search</button>
               </a>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
