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
  const [product, setProduct] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({});
  const [beckoProducts, setBeckoProducts] = useState([]);
  const [samsungProducts, setSamsungProducts] = useState([]);
  const [zanusiProducts, setZanusiProducts] = useState([]);
  const [BoschProducts, setBoschProducts] = useState([]);
  const [TournadoProducts, setTournadoProducts] = useState([]);

  // const getUserData = (eventinfo) => {
  //   let myUser = { ...user };
  //   myUser[eventinfo.target.name] = eventinfo.target.value;
  //   setUser(myUser);
  //   console.log(myUser);
  // };

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
        const products = data.result;

        // Set state for all products
        setProduct(products);

        // Filter products by brand and set state accordingly
        setBeckoProducts(
          products.filter((product) => product.brand === "becko")
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


  const deleteProduct = async (prod_id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:4000/api/product/${prod_id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(prod_id)
      if (response.data.message === "Product Deleted successfully") {
        setProduct(prevProducts => prevProducts.filter(product => product.prod_id !== prod_id));
        // saveUserData();
        console.log(product);
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
        {/*======================= tabs Becko=================*/}

        <div className="col-md-9">
          <div className="tab-content">
            {[1, 2, 3, 4].map((tabIndex) => (
              <div
                key={tabIndex}
                className={`tab-pane ${activeTab === tabIndex ? "active" : ""}`}
                id={`tab-${tabIndex}`}
              >
                <TableComponent />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
