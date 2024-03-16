
import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataLink from "./pages/Org/DataLink";
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
          <Route path="/DataLink" element={<DataLink />} />
          <Route path="/login" element={<Login />} />
          <Route path="/request" element={<Request />} />
          <Route path="/pass" element={<Pass />} />
          <Route path="/card" element={<Card />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;