import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/Admins/Admin.jsx";
import Login from "./pages/Auth/Login";
import Request from "./pages/Org/Request";
import Card from "./pages/User/card";
import Pass from "./pages/Auth/pass";
import App from "./App";
import { StrictMode } from "react";

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
