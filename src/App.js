import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Request from "./pages/Org/Request";
import Pass from "./pages/Auth/pass";
import Card from "./pages/User/card";


function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
