import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaComments, FaLinkedin, FaGithub } from "react-icons/fa";
import logo2 from "../../img/Logo2.png";
import { FaGooglePlusG, FaFacebookF, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer-dev">
      <div className="pg-footer">
        <footer className="footer">
          <svg
            className="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              className="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            ></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#">
                  <img
                    src={logo2}
                    className="d-inline-block align-top"
                    alt=""
                  />
                </a>
              </div>
              <button className="request-now-button">Request Now!</button>
            </div>

            <div className="footer-content-column">
              <div className="footer-menu text-center">
                <h3 className="footer-menu-name"><FaLinkedin />Analysto Team on Linkedin</h3>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://www.linkedin.com/in/kareem-ibraheem/">
                      {" "}
                      <span>kareem ibraheem</span>{" "}
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://www.linkedin.com/in/alaa-atef-59718a255/">
                      {" "}
                      <span>Alaa Atef</span>{" "}
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://www.linkedin.com/in/hoda-magdy-956431288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      {" "}
                      <span>Hoda Magdy</span>{" "}
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://www.linkedin.com/in/youssefbadr1/">
                      {" "}
                      <span>Youssef Badr</span>{" "}
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://www.linkedin.com/in/gamal-sobhy-510693217/">
                      {" "}
                      <span>Gamal Sobhy</span>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">
                  {" "}
                  <FaComments /> Let's Chat
                </h2>
                <p className="footer-call-to-action-description">
                  Have a support question?
                </p>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">
                  {" "}
                  <FaPhoneAlt /> You Call Us
                </h2>
                <p className="footer-call-to-action-link-wrapper">
                  <a
                    className="footer-call-to-action-link"
                    target="_self"
                  >
                      0124-64XXXX
                  </a>
                </p>
              </div>
            </div>
          </div>
          <ul class="social-links">
  <li class="google"><FaGooglePlusG /></li>
  <li class="facebook"><FaFacebookF /></li>
  <li class="instagram"><FaInstagram /></li>
  <li class="twitter"><FaGithub /></li>
</ul>

          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="#" target="_self">
                  ©2024. | Analysto | All rights reserved.
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
