import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function Layout({userData}){
    console.log(userData)
    return (
        <>
        <Navbar userData={userData}/>
        <Outlet></Outlet>
        </>
    );
}

export default Layout;
