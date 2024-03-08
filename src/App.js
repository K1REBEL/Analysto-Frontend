import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Request from "./pages/Login/Request";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/datatable" element={<Datatable />} />
      </Routes>
    </>
  );
}

export default App;
