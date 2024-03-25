import React from "react";
import "./Header.scss";
import wel from "../../img/about.jpg";

function Header() {


    
    
  return (
    <div className="containeeer">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="centered">
            <div className="masthead-heading fs-3 fw-light text-muted">
              Welcome To Analysto!
            </div>
            <div className="masthead">It's Nice To Meet You</div>
            <a className="nav-link scrollto" href="#Request"> <button className="galaxy" type="button">
             <strong>Get Start</strong> 
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button></a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <img src={wel} alt="Welcome to Analysto" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Header;
