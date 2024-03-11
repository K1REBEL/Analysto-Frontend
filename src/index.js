import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Auth/Login";
import Request from "./pages/Org/Request";
import Card from "./pages/User/card";
import Pass from "./pages/Auth/pass";
import App from "./App";
import { StrictMode } from "react";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<Request />} />
        <Route path="/card" element={<Card />} /> 
        <Route path="/pass" element={<Pass />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
  rootElement
);
