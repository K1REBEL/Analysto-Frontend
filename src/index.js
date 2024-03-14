import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from "./pages/home/Home";
import Admin from "./pages/Admins/Admin.jsx";
import Login from "./pages/Auth/Login";
import Request from "./pages/Org/Request";
import Card from "./pages/employee/card";
import Pass from "./pages/Auth/pass";
import Edit from "./pages/Admins/edit.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/request" element={<Request />} />
    <Route path="/card" element={<Card />} />
    <Route path="/pass" element={<Pass />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/edit" element={<Edit />} />
  </Routes>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
