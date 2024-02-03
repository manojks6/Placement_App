import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aptitude from "./Pages/Aptitude";
import Dsa from "./Pages/Dsa";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa" element={<Dsa />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
