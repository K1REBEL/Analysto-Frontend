import React from 'react';
import "./NavbarLanding.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "../../components/About/About";
import Request from "../../pages/Auth/Request";
import Contacts from "../../components/Contacts/Contacts";
import { Link } from "react-router-dom";
import img1 from '../../img/logo.png';




function NavbarLanding() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <a className="navbar-brand" href="#">
      <img src={img1} className="d-inline-block align-top" alt="" />      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-center row-reverse">
          <li className="nav-item active">
            <a className="nav-link" href="#"> </a>
          </li>
          <li className="nav-item">
                      <Link to='/About'>    <span style={{ color: 'black', fontSize: '1.2rem' }}>About</span>
 </Link>
          </li>
          <li className="nav-item nav-link">
          <Link to="/Contacts">    <span style={{ color: 'black', fontSize: '1.2rem' }}>Contacts</span>
 </Link>
          </li>
          <li className="nav-item">
          <Link to="/Request">   <button>Request a Subscription</button>  </Link>
          </li>

          <li className="nav-item">
          <Link to="/">  <button>Login</button> </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default  NavbarLanding;