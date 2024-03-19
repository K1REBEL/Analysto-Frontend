import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo2 from "../../img/Logo2.png";

function Navbar() {
  return ( 
    <nav className="navbar flex-md flex-md-row flex-column d-flex p-2">
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            <img src={logo2} alt="logo" className="small-logo" />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
        <Link to='/About'>About Us</Link>
        <Link to='/About'>Contact Us</Link>
        <Link to='/About'>Request a Subscription</Link>
        <Link to='/About'>Login</Link>
        <Link to='/About'>Logout</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
