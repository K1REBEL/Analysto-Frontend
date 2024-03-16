import React from "react";
import "./Navbar.scss";

function Navbar() {
  return ( 
    <nav className="navbar flex-md flex-md-row flex-column d-flex p-2">
      <div className="wrapper">
        <div className="items d-flex justify-content-between">
          <span>
            <li>
              Organization Name:
              <i> Electrozone</i>
             </li>
           
          </span>
          <div className="item">
            <img src="/images/org.jpg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
