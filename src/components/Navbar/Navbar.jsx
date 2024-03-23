import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Navbar({userData}) {
  console.log(userData)

  return (
    <div className="container d-flex align-items-center justify-content-between">
      <header id="header" className="fixed-top">
        <nav id="navbar" className="navbar">
            <img className="logo" src={logo} alt="" />
          <ul className="icons">
            <li><Link to ="/"className="nav-link scrollto active" href="#about">Home</Link></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Contact Us</a></li>
            <li><a className="nav-link scrollto" href="#services">Request</a></li>
            
            {userData? <>
              <li><a className="getstarted scrollto" href="#about">Logout</a></li>
              </>:<><li><a className="getstarted scrollto" href="#about">Login</a></li></>
            }
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
