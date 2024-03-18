import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataLink from "./pages/Org/DataLink";
import Admin from "./pages/Admins/Admin";
import Login from "./pages/Auth/Login";
import Request from "./pages/Auth/Request";
import Pass from "./pages/Auth/pass";
import Card from "./pages/employee/card";
import Edit from "./pages/Admins/Edit";
import Layout from "./components/layout/layout";
import NotFound from "./components/NotFound/NotFound";
import {jwtDecode} from 'jwt-decode';
import Landing from "./pages/home/Landing";

function App() {

  const [userData , setuserData] = useState(null);

  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken); //user info
    console.log(decodedToken);
    setuserData(decodedToken);
  }

  let routers = createBrowserRouter ([
    {path:'/' ,element:<Layout/>,children:[
      {index:true , element:<Landing/>},
      {path:'datalink', element:<DataLink/>},
      {path:'/login', element:<Login saveUserData={saveUserData} />} ,
      {path:'/Request' ,element:<Request />}, 
      {path:'/pass' ,element:<Pass />} ,
      {path:'/card',element:<Card />} ,
      {path:'/admin', element:<Admin />} ,
      {path:'/edit"', element:<Edit />} ,
      {path:'*', element:<NotFound/>}
    ]}
  ])
  return <RouterProvider router={routers}/>
}

export default App;