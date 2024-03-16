import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import DataLink from "./pages/Org/DataLink";
import Admin from "./pages/Admins/Admin.jsx";
import Login from "./pages/Auth/Login";
import Request from "./pages/Auth/Request";
import Card from "./pages/employee/card.jsx";
import Pass from "./pages/Auth/pass.jsx";
import Edit from "./pages/Admins/Edit.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";




const router = createBrowserRouter([
  {
    path: "/DataLink",
    element: <DataLink />,
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
  {
    path: "/edit",
    element: <Edit />,
  },

  {
    path: "/NotFound",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
