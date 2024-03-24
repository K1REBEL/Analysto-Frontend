import React, { useState } from "react";
import "./brandItem.scss";
import Navbar from "../../components/Navbar/Navbar";
import amazon from "../../img/amazon.png";
import noon from "../../img/noon.png";
import tech from "../../img/b-tech.png";
import jumia from "../../img/jumia.jpg";

const BrandsItem = () => {
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
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      {/*======================= tabs =================*/}
      <div className="row">
        <div className="col-md-3 d-flex flex-wrap">
          <ul className="nav nav-tabs flex-column" role="tablist">
            <li
              className={`nav-item ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1, amazon)}
            >
              <a
                className={`nav-link ${
                  activeImage === amazon ? "active-image" : ""
                }`}
                href="#home"
                aria-controls="home"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={amazon} alt="Amazon" />
              </a>
            </li>
            <li
              className={`nav-item ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2, noon)}
            >
              <a
                className={`nav-link ${
                  activeImage === noon ? "active-image" : ""
                }`}
                href="#profile"
                aria-controls="profile"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={noon} alt="Noon" />
              </a>
            </li>
            <li
              className={`nav-item ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3, tech)}
            >
              <a
                className={`nav-link ${
                  activeImage === tech ? "active-image" : ""
                }`}
                href="#messages"
                aria-controls="messages"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={tech} alt="B-Tech" />
              </a>
            </li>
            <li
              className={`nav-item ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4, jumia)}
            >
              <a
                className={`nav-link ${
                  activeImage === jumia ? "active-image" : ""
                }`}
                href="#settings"
                aria-controls="settings"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={jumia} alt="Jumia" />
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
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="row mb-3">
                      <div className="col d-flex">
                        <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                          <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                        <button className="btn btn-primary ml-2">
                          Add URL
                        </button>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">ASIN</th>
                            <th scope="col">URLs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="sku-box">
                    <p>SKU: B0788C6Z99</p>
                    <p>Product: Backpack</p>
                    <p>Category: Electronics</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane ${activeTab === 2 ? "active" : ""}`}
              id="profile"
            >
              {/*======================= tabs noon =================*/}

              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="row justify-content-end">
                    <div className="row mb-3">
                      <div className="col d-flex">
                        <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                          <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                        <button className="btn btn-primary ml-2">
                          Add URL
                        </button>
                      </div>
                    </div>
                    </div>
                    
                    <div className="row justify-content-center">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">NIN / ZSKUs</th>
                            <th scope="col">URLs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="sku-box">
                    <p>SKU: B0788C6Z99</p>
                    <p>Product: Backpack</p>
                    <p>Category: Electronics</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane ${activeTab === 3 ? "active" : ""}`}
              id="messages"
            >
              {/*======================= tabs b-tech =================*/}
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                  <div className="row mb-3">
                      <div className="col d-flex">
                        <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                          <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                        <button className="btn btn-primary ml-2">
                          Add URL
                        </button>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">URLs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="sku-box">
                    <p>SKU: B0788C6Z99</p>
                    <p>Product: Backpack</p>
                    <p>Category: Electronics</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane ${activeTab === 4 ? "active" : ""}`}
              id="settings"
            >
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                  <div className="row mb-3">
                      <div className="col d-flex">
                        <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                          <input
                          type="text"
                          className="input flex"
                          placeholder="Enter Full Name"
                          name="name"
                        />
                        <button className="btn btn-primary ml-2">
                          Add URL
                        </button>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Query</th>
                            <th scope="col">URLs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">B0788C6Z99</td>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="sku-box">
                    <p>SKU: B0788C6Z99</p>
                    <p>Product: Backpack</p>
                    <p>Category: Electronics</p>
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

export default BrandsItem;
