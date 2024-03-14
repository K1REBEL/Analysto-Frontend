import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from "./pages/home/Home";
import Admin from "./pages/Admins/Admin.jsx";
import Login from "./pages/Auth/Login";
import Request from "./pages/Org/Request";
import Card from "./pages/User/card.js";
import Pass from "./pages/Auth/pass.js";




import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <h2>sorry....</h2>,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Request",
    element: <Request />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/pass",
    element: <Pass />,
  },

  {
    path: "/admin",
    element: <Admin />,
  },

 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
