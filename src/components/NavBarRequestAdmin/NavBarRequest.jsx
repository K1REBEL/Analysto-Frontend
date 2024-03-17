import React from 'react';
import img1 from '../../img/logo.png';
import img2 from '../../img/user.png';
import "./NavBarRequest.scss"

function NavBarRequest() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand" href="#">
                <img src={img1} className="d-inline-block align-top" alt="" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-center row-reverse">
                    <li className="nav-item d-flex align-items-center">
                        <img src={img2} alt="" className="avatar m-3"/>
                        <p style={{ color: 'black', margin: 'auto' }}>Gamal Sobhy</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBarRequest;
