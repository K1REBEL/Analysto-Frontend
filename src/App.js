import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataLink from "./pages/Org/DataLink";
import Admin from "./pages/Admins/Admin";
import Login from "./pages/Auth/Login";
import Request from "./pages/Auth/Request";
import Pass from "./pages/Auth/pass";
import Card from "./components/employee/card";
import Edit from "./pages/Admins/Edit";
import Layout from "./components/layout/layout";
import NotFound from "./components/NotFound/NotFound";
import {jwtDecode} from 'jwt-decode';
import Landing from "./pages/Home/Landing";
import BrandsItem from "./pages/employee/brandsItem";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
function App() {


  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null)
    {
      saveUserData();
    }
  } , [])
  const [userData , setuserData ] = useState(null);
  const [userRole , setuserRole ] = useState(null);

  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken); //user info
    setuserData(decodedToken);
    setuserRole(decodedToken.role);
    console.log(decodedToken);
    console.log(decodedToken.role);
  }

  let routers = createBrowserRouter ([
    {path:'/' ,element:<Layout setuserData={setuserData} userData={userData}/>,children:[
      {index:true , element:<Landing/>},
      {path:'/login', element:<Login saveUserData={saveUserData}  />} ,
      {path:'datalink', element:<ProtectedRoute><DataLink saveUserData={saveUserData}/></ProtectedRoute>},
      {path:'/Request' ,element:<ProtectedRoute><Request /></ProtectedRoute>}, 
      {path:'/pass' ,element:<ProtectedRoute><Pass saveUserData={saveUserData} setuserRole={setuserRole} userRole={userRole}/></ProtectedRoute>} ,
      {path:'/card',element:<ProtectedRoute><Card /></ProtectedRoute>} ,
      {path:'/admin', element:<ProtectedRoute><Admin /></ProtectedRoute>} ,
      {path:'/edit', element:<ProtectedRoute><Edit /></ProtectedRoute>} ,
      {path:'/brand', element:<ProtectedRoute><BrandsItem /></ProtectedRoute>} ,
      {path:'*', element:<NotFound/>}
    ]}
  ])
  return <RouterProvider router={routers}/>
}

export default App;