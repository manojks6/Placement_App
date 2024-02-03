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
          <a href="/Aptitude">Aptitude</a>
          <a href="/Dsa">Coding</a>
          <a href="/Resources">Resources</a>
          <a className="button">
            <input type="text" placeholder="Any Qustions"></input>
            <button>Search</button>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
