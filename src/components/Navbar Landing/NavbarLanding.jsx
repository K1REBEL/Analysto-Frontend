import React from 'react';
import { Link } from "react-router-dom";
import "./NavbarLanding.scss";
import About from "../../components/About/About";
import Request from "../../pages/Auth/Request";
import Contacts from "../../components/Contacts/Contacts";
import img1 from '../../img/logo.png';
import { HashLink } from "react-router-hash-link";




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
          <HashLink smooth to='/#About'>
              <span style={{ color: 'black', fontSize: '1.2rem' }}>About</span>
            </HashLink>
          </li>
          <li className="nav-item nav-link">
          <HashLink smooth to='/#Contacts'>
              <span style={{ color: 'black', fontSize: '1.2rem' }}>Contacts</span>
            </HashLink>
          </li>
          <li className="nav-item">
          <HashLink smooth to='/#Request'>
              <span style={{ color: 'black', fontSize: '1.2rem' }}>Request</span>
            </HashLink>
          </li>

          <li className="nav-item">
          <Link to="/login">  <button>Login</button> </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default  NavbarLanding;