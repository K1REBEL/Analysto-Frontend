import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <div className="container d-flex align-items-center justify-content-between">
      <header id="header" className="fixed-top">
        <nav id="navbar" className="navbar">
            <img className="logo" src={logo} alt="" />
          <ul className="icons">
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Contact Us</a></li>
            <li><a className="nav-link scrollto" href="#services">Request</a></li>
            <li><a className="getstarted scrollto" href="#about">Login</a></li>
            <li><a className="getstarted scrollto" href="#about">Logout</a></li>
           
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
