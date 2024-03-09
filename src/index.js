import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home";
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

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
