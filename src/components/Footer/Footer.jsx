import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaComments, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGooglePlusG, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import logo2 from "../../img/Logo2.png";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScroll = () => {
    scrollTop();
  };

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    scrollTop(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
                <Link to="/" className="footer-logo-link">
                  <img
                    src={logo2}
                    className="d-inline-block align-top"
                    alt=""
                  />
                </Link>
              </div>
              <button className="request-now-button">Request Now!</button>
            </div>

            <div className="footer-content-column">
              <div className="footer-menu text-center">
                <h3 className="footer-menu-name">
                  <FaLinkedin />
                  Analysto Team on Linkedin
                </h3>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link
                      to="https://www.linkedin.com/in/kareem-ibraheem/"
                      target="_blank"
                    >
                      <span>kareem ibraheem</span>
                    </Link>
                  </li>

                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link
                      to="https://www.linkedin.com/in/alaa-atef-59718a255/"
                      target="_blank"
                    >
                      <span>Alaa Atef</span>
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link
                      to="https://www.linkedin.com/in/hoda-magdy-956431288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <span>Hoda Magdy</span>
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link
                      to="https://www.linkedin.com/in/youssefbadr1/"
                      target="_blank"
                    >
                      <span>Youssef Badr</span>
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link
                      to="https://www.linkedin.com/in/gamal-sobhy-510693217/"
                      target="_blank"
                    >
                      <span>Gamal Sobhy</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">
              
                  <FaComments /> Let's Chat
                </h2>
                <p className="footer-call-to-action-description">
                  Have a support question?
                </p>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">
               
                  <FaPhoneAlt /> You Call Us
                </h2>
                <p className="footer-call-to-action-link-wrapper">
                  <a className="footer-call-to-action-link" target="_self">
                    0124-64XXXX
                  </a>
                </p>
              </div>
            </div>
          </div>
          <ul className="social-links">
            <li className="google">
              <Link to="#" aria-label="Google Plus">
                <FaGooglePlusG />
              </Link>
            </li>
            <li className="facebook">
              <Link to="#" aria-label="Facebook">
                <FaFacebookF />
              </Link>
            </li>
            <li className="instagram">
              <Link to="#" aria-label="Instagram">
                <FaInstagram />
              </Link>
            </li>
            <li className="twitter">
              <Link to="#" aria-label="Twitter">
                <FaGithub />
              </Link>
            </li>
          </ul>

          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                  ©2024. | Analysto | All rights reserved.
                
              </p>
            </div>
          </div>
        </footer>
        <button
          className={`backToTopBtn ${showButton ? "active" : ""}`}
          onClick={handleButtonClick}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

export default Footer;
