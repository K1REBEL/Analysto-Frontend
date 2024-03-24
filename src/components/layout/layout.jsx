import React from 'react';
import {Outlet , useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function Layout({userData , setuserData}){
    console.log(userData)

    let navigate  = useNavigate();
    function logOut()
     {
        localStorage.removeItem('userToken');
        setuserData(null);
        navigate('/login');
    }
    return (
        <>
        <Navbar logOut={logOut} userData={userData}/>
        {/* <Navbar userData={userData}/> */}
        <Outlet></Outlet>
        </>
    );
}

export default Layout;
