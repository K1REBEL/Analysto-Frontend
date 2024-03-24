import React, { useState } from "react";
import "./card.scss";
import Navbar from "../../components/Navbar/Navbar";
import imag1 from "../../img/beko-2.svg";
import imag2 from "../../img/samsung.svg";
import imag3 from "../../img/cdnlogo.com_zanussi.svg";
import imag4 from "../../img/bosch.svg";
import imag5 from "../../img/imag5.svg";

const Card = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImage, setActiveImage] = useState(null);

  const handleTabClick = (tabIndex, image) => {
    setActiveTab(tabIndex);
    setActiveImage((prevActiveImage) =>
      prevActiveImage === image ? null : image
    );
  };

  return (
    <div className="container-fluid">
      
      {/*======================= tabs =================*/}
      <div className="row">
        <div className="col-md-3 d-flex flex-wrap">
          <ul className="nav nav-tabs flex-column" role="tablist">
            <li
              className={`nav-item ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1, imag1)}
            >
              <a
                className={`nav-link ${
                  activeImage === imag1 ? "active-image" : ""
                }`}
                href="#home"
                aria-controls="home"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={imag1} alt="Amazon" />
              </a>
            </li>
            <li
              className={`nav-item ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2, imag2)}
            >
              <a
                className={`nav-link ${
                  activeImage === imag2 ? "active-image" : ""
                }`}
                href="#profile"
                aria-controls="profile"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={imag2} alt="Noon" />
              </a>
            </li>
            <li
              className={`nav-item ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3, imag3)}
            >
              <a
                className={`nav-link ${
                  activeImage === imag3 ? "active-image" : ""
                }`}
                href="#messages"
                aria-controls="messages"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={imag3} alt="B-Tech" />
              </a>
            </li>
            <li
              className={`nav-item ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4, imag4)}
            >
              <a
                className={`nav-link ${
                  activeImage === imag4 ? "active-image" : ""
                }`}
                href="#settings"
                aria-controls="settings"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={imag4} alt="Jumia" />
              </a>
            </li>
            <li
              className={`nav-item ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4, imag5)}
            >
              <a
                className={`nav-link ${
                  activeImage === imag5 ? "active-image" : ""
                }`}
                href="#settings"
                aria-controls="settings"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={imag5} alt="Jumia" />
              </a>
            </li>
          </ul>
        </div>
        {/*======================= tabs Amazon =================*/}

        <div className="col-md-9">
          <div className="tab-content">
            <div
              className={`tab-pane ${activeTab === 1 ? "active" : ""}`}
              id="home"
            >
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">SKUs</th>

                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">B0788C6Z9</th>
                    <td>Air Fryer</td>
                    <td>
                      <button className="btn btn-primary">config</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">B0788C6Z9</th>
                    <td>Air Fryer</td>
                    <td>
                      <button className="btn btn-primary">config</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">B0788C6Z9</th>
                    <td>Air Fryer</td>
                    <td>
                      <button className="btn btn-primary">config</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">B0788C6Z9</th>
                    <td>Air Fryer</td>
                    <td>
                      <button className="btn btn-primary">config</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className={`tab-pane ${activeTab === 2 ? "active" : ""}`}
              id="profile"
            >
              {/*======================= tabs noon =================*/}

              <div className="row">
                <div className="container">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">SKUs</th>

                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane ${activeTab === 3 ? "active" : ""}`}
              id="messages"
            >
              {/*======================= tabs b-tech =================*/}

              <div className="row">
                <div className="container">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">SKUs</th>

                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">B0788C6Z9</th>
                        <td>Air Fryer</td>
                        <td>
                          <button className="btn btn-primary">config</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane ${activeTab === 4 ? "active" : ""}`}
              id="settings"
            >
              <div className="row">
                <div className="row">
                  <div className="col">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">SKUs</th>

                          <th scope="col">Category</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">B0788C6Z9</th>
                          <td>Air Fryer</td>
                          <td>
                            <button className="btn btn-primary">config</button>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">B0788C6Z9</th>
                          <td>Air Fryer</td>
                          <td>
                            <button className="btn btn-primary">config</button>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">B0788C6Z9</th>
                          <td>Air Fryer</td>
                          <td>
                            <button className="btn btn-primary">config</button>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">B0788C6Z9</th>
                          <td>Air Fryer</td>
                          <td>
                            <button className="btn btn-primary">config</button>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;