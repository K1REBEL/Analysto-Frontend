import React from "react";
import img6 from "../../img/logo-lg.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "../employee/brandItem.scss";

const BrandsItem = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="card">
              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <img className="" src={img6} alt="Card cap" style={{width:"200px"}}/>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p>
                    Example from: https://codepen.io/SteveJRobertson/pen/POdvgz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsItem;
