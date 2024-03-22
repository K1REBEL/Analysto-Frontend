import React from "react";
import "./Header.scss";
import wel from "../../img/about.jpg";

function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="centered">
            <div className="masthead-heading fs-3 fw-light text-muted">
              Welcome To Analysto!
            </div>
            <div className="masthead">It's Nice To Meet You</div>
            <button className="btn" type="button">
              <strong>Get Start</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={wel} alt="Your Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Header;
