import React from 'react';
import "./NavbarLanding.scss";

function NavbarLanding() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <a className="navbar-brand" href="#">
        <img src="/img/logo.png" className="d-inline-block align-top" alt="" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-center row-reverse">
          <li className="nav-item active">
            <a className="nav-link" href="#"> </a>
          </li>
          <li className="nav-item">
          <Link to="">  <span>About</span>  </Link>
          </li>
          <li className="nav-item">
          <Link to="/">  <span>Contacts</span>  </Link>
          </li>
          <li className="nav-item">
          <Link to="/">   <button>Request a Subscription</button>  </Link>
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