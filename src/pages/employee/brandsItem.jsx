import React from "react";
import amazon from "../../img/amazon.png";
import none from "../../img/none.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import "../employee/brandItem.scss";

const BrandsItem = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="card">
              <center>
                <h2>Item SKUs</h2>
              </center>

              <hr />

              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <div class="con p-3 ">
                    <img className="img" src={amazon} alt="amazon" />
                  </div>
                </div>
                <div class="col px-md-5" style={{ marginBottom: "20px" }}>
                  <div class="p-3 ">
                    <p className="text-muted smallestt">
                      https://www.amazon.com/
                      s?i=fashion-womens&bbn=16334314011&rh=
                      n%3A7141123011%2Cn%3A16334314011%2Cn%3A7147
                      440011%2Cn%3A1040660%2Cn%3A1045024%2Cp_89%3ADail
                    </p>
                  </div>
                </div>
                <div class="col px-md-5" style={{ marginBottom: "20px" }}>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-mdb-ripple-init
                  >
                    <AddOutlinedIcon />
                    Add URL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="card">
              <center>
                <h2>Item SKUs</h2>
              </center>

              <hr />

              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <div class="con p-3 ">
                    <img className="img" src={none} alt="amazon" />
                  </div>
                </div>
                <div class="col px-md-5">
                  <div class="p-3 ">
                    <p className="text-muted smallestt">
                      https://www.amazon.com/
                      s?i=fashion-womens&bbn=16334314011&rh=
                      n%3A7141123011%2Cn%3A16334314011%2Cn%3A7147
                      440011%2Cn%3A1040660%2Cn%3A1045024%2Cp_89%3ADail
                    </p>
                  </div>
                </div>
                <div class="col px-md-5">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-mdb-ripple-init
                  >
                    <AddOutlinedIcon />
                    Add URL
                  </button>
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
