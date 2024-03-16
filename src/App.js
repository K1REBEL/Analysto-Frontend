import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/Admins/Admin";
import Login from "./pages/Login/Login";
import Request from "./pages/Org/Request";
import Pass from "./pages/Auth/pass";
import Card from "./pages/employee/card";
import Edit from "./pages/Admins/Edit";

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
          <Route path="/card" element={<Card />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;