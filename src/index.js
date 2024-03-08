import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Request from "./pages/Login/Request";
import Datatable from "./components/datatable/Datatable";

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
    path: "/datatable",
    element: <Datatable />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
