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
                <div className="col">
                  <button className="btn btn-primary" type="submit">
                    Add URL
                  </button>
                  <div className="container">
                    <div className="row justify-content-center">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">ASIN</th>
                            <th scope="col">URLs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">B0788C6Z99</th>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">B0788C6Z99</th>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">B0788C6Z99</th>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">B0788C6Z99</th>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">B0788C6Z99</th>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">B0788C6Z99</th>
                            <td>
                              https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                <div className="container">
                  <div className="row justify-content-center">
                    <table className="tables">
                      <thead>
                        <tr>
                          <th>NIN / ZSKUs</th>
                          <th>
                            URLs <button class="button">Add URL</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>N70046763V</td>
                          <td className="link">
                            https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                          </td>
                        </tr>
                        <tr>
                          <td>N70046763V</td>
                          <td className="link">
                            https://www.amazon.com/Logitech-LIGHTSPEED-Wireless-Gaming-Mouse/dp/B07CMS5Q6P/ref=pd_bxgy_img_d_sccl_1/144-6623953-4066614?pd_rd_w=I56H8&content-id=amzn1.sym.2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_p=2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_r=TCTCB71RANC548CD366J&pd_rd_wg=I51zd&pd_rd_r=b558c6b3-c6b9-4d08-a43d-85725dd8d96f&pd_rd_i=B07CMS5Q6P&th=1
                          </td>
                        </tr>
                        <tr>
                          <td>N70046763V</td>
                          <td className="link">
                            https://www.amazon.com/dp/B08KKBSDTY?ref_=posts&th=1
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                <div className="container">
                  <div className="row justify-content-center">
                    <table className="tables">
                      <thead>
                        <tr>
                          <th>
                            URLs<button class="button">Add URL</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="link">
                            https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                          </td>
                        </tr>
                        <tr>
                          <td className="link">
                            https://www.amazon.com/Logitech-LIGHTSPEED-Wireless-Gaming-Mouse/dp/B07CMS5Q6P/ref=pd_bxgy_img_d_sccl_1/144-6623953-4066614?pd_rd_w=I56H8&content-id=amzn1.sym.2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_p=2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_r=TCTCB71RANC548CD366J&pd_rd_wg=I51zd&pd_rd_r=b558c6b3-c6b9-4d08-a43d-85725dd8d96f&pd_rd_i=B07CMS5Q6P&th=1
                          </td>
                        </tr>
                        <tr>
                          <td className="link">
                            https://www.amazon.com/dp/B08KKBSDTY?ref_=posts&th=1
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                    <div className="container">
                      <div className="row justify-content-center">
                        <table className="tables">
                          <thead>
                            <tr>
                              <th>Query</th>
                              <th className="betch">
                                search URLs{" "}
                                <button class="button">Add URL</button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> B0788C6Z99</td>
                              <td className="link">
                                https://www.amazon.com/Acer-Predator-Utility-Backpack-Notebook/dp/B0788C6Z99?ref_=Oct_DLandingS_D_41bb447c_3&th=1
                              </td>
                            </tr>
                            <tr>
                              <td>B07CMS5Q6P</td>
                              <td className="link">
                                https://www.amazon.com/Logitech-LIGHTSPEED-Wireless-Gaming-Mouse/dp/B07CMS5Q6P/ref=pd_bxgy_img_d_sccl_1/144-6623953-4066614?pd_rd_w=I56H8&content-id=amzn1.sym.2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_p=2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_r=TCTCB71RANC548CD366J&pd_rd_wg=I51zd&pd_rd_r=b558c6b3-c6b9-4d08-a43d-85725dd8d96f&pd_rd_i=B07CMS5Q6P&th=1
                              </td>
                            </tr>
                            <tr>
                              <td>B08KKBSDTY</td>
                              <td className="link">
                                https://www.amazon.com/dp/B08KKBSDTY?ref_=posts&th=1
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
      </div>
    </div>
  );
};

export default BrandsItem;
