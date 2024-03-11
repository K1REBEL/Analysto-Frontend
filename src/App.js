import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Auth/Login";
import Request from "./pages/Org/Request";
import Pass from "./pages/Auth/pass";
import Card from "./pages/User/card";

import "./pages/User/card.css";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<Request />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
