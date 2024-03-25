import React, { useEffect, useState } from "react";
import "./card.scss";
import axios from "axios";
import imag1 from "../../img/beko-2.svg";
import imag2 from "../../img/samsung.svg";
import imag3 from "../../img/cdnlogo.com_zanussi.svg";
import imag4 from "../../img/bosch.svg";
import imag5 from "../../img/imag5.svg";

const Card = ({ saveUserData }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImage, setActiveImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({});
  const [bekoProducts, setBekoProducts] = useState([]);
  const [samsungProducts, setSamsungProducts] = useState([]);
  const [zanusiProducts, setZanusiProducts] = useState([]);
  const [BoschProducts, setBoschProducts] = useState([]);
  const [TournadoProducts, setTournadoProducts] = useState([]);

  const handleButtonClick = () => {
    // Change the URL to navigate to another page
  window.location.href = "/brand";
  };

  const getUserData = (eventinfo) => {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
    console.log(myUser);
  };

  ////////////////////////////////////////////get products///////////////////////////////

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedToken = localStorage.getItem("userToken");
        setUserToken(fetchedToken);

        const config = {
          headers: {
            Authorization: `Bearer ${fetchedToken}`,
          },
        };

        const { data } = await axios.get(
          "http://127.0.0.1:4000/api/products",
          config
        );
        const product = data.result;

        // Set state for all products
        setProducts(product);
        console.log(product.brand)

        // Filter products by brand and set state accordingly
        setBekoProducts(
          products.filter((product) => product.brand === "beko")
        );
        setSamsungProducts(
          products.filter((product) => product.brand === "samsung")
        );
        setZanusiProducts(
          products.filter((product) => product.brand === "zanussi")
        );
        setBoschProducts(
          products.filter((product) => product.brand === "Bosch")
        );
        setTournadoProducts(
          products.filter((product) => product.brand === "Tournado")
        );
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();
  }, []);

  ////////////////////////////////////////////delete products///////////////////////////////


  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:4000/api/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(id)
      if (response.data.message === "Product Deleted successfully") {
        setProducts(prevProducts => prevProducts.filter(product => product.prod_id !== id));
        // saveUserData();
        console.log(products);
      }
    } catch (error) {
      console.error("Error occurred while deleting product:", error);
    }
  };


  /////////////////////////////////////////////////////////////////////////

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
                href="#beko"
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
                href="#samsung"
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
                href="#zanussi"
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
                href="#bosch"
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
                href="#tornado"
                aria-controls="settings"
                role="tab"
                data-toggle="tab"
              >
                <img className="brand-image" src={imag5} alt="Jumia" />
              </a>
            </li>
          </ul>
        </div>
        {/*======================= tabs Becko=================*/}

        <div className="col-md-9">
          <div className="tab-content">
            <div
              className={`tab-pane ${activeTab === 1 ? "active" : ""}`}
              id="home"
            >
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">SKUs</th>
                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bekoProducts.map((item, index) => (
                    <tr key={index}>
                      <td scope="row">{item.sku}</td>
                      <td>{item.category}</td>
                      <td>
                      <button className="btn btn-primary" onClick={handleButtonClick}>config</button> 
                      <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</button>
                        </td>
                    </tr>
                  ))}
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
                      {samsungProducts.map((item, index) => (
                        <tr key={index}>
                          <td scope="row">{item.sku}</td>
                          <td>{item.category}</td>
                          <td>
                          <button className="btn btn-primary" onClick={handleButtonClick}>config</button>
                          <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</button>
      
      </td>
                        </tr>
                      ))}
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
                      {zanusiProducts.map((item, index) => (
                        <tr key={index}>
                          <td scope="row">{item.sku}</td>
                          <td>{item.category}</td>
                          <td>
                          <button className="btn btn-primary" onClick={handleButtonClick}>config</button>
                          <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</button>
     
                    </td>
                        </tr>
                      ))}
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
                        {BoschProducts.map((item, index) => (
                          <tr key={index}>
                            <td scope="row">{item.sku}</td>
                            <td>{item.category}</td>
                            <td>
                            <button className="btn btn-primary" onClick={handleButtonClick}>config</button>
                            <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</button>
                            </td>
                          </tr>
                        ))}
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
