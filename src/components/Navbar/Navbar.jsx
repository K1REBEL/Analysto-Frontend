import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Navbar({userData , logOut}) {
  console.log(userData)

  return (
    <div className="container d-flex align-items-center justify-content-between">
      <header id="header" className="fixed-top">
        <nav id="navbar" className="navbar">
            <img className="logo" src={logo} alt="" />
          <ul className="icons">
            <li><Link to ="/"className="nav-link scrollto active" href="#about">Home</Link></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#Contacts">Contact Us</a></li>
            <li><a className="nav-link scrollto" href="#Request">Request</a></li>
            
            {userData ? (
              // <li><button className="getstarted scrollto" onClick={logOut}>Logout</button></li>
              <li><button className="getstarted scrollto" >Logout</button></li>
            ) : (
              <li><Link to="/login" className="getstarted scrollto">Login</Link></li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
