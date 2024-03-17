import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataLink from "./pages/Org/DataLink";
import Admin from "./pages/Admins/Admin";
import Login from "./pages/Auth/Login";
import Request from "./pages/Auth/Request";
import Pass from "./pages/Auth/pass";
import Card from "./pages/employee/card";
import Edit from "./pages/Admins/Edit";
<<<<<<< HEAD
import Landing from "./pages/Home/Landing";

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
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
=======
import Layout from "./components/layout/layout";
import NotFound from "./components/NotFound/NotFound";
import {jwtDecode} from 'jwt-decode';

function App() {

  const [userData , setuserData] = useState(null);

  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setuserData(decodedToken);
  }

  let routers = createBrowserRouter ([
    {path:'/' ,element:<Layout/>,children:[
      {path:'datalink', element:<DataLink/>},
      {path:'/login', element:<Login saveUserData={saveUserData} />} ,
      {path:'/requet' ,element:<Request />}, 
      {path:'/pass' ,element:<Pass />} ,
      {path:'/card',element:<Card />} ,
      {path:'/admin', element:<Admin />} ,
      {path:'/edit"', element:<Edit />} ,
      {path:'*', element:<NotFound/>}
    ]}
  ])
  return <RouterProvider router={routers}/>
>>>>>>> aa0949349a31ff4b55219efec081e23c2cafcc7c
}

export default App;