import React, { useState } from "react";
import "./card.scss";
import Navbar from "../../components/Navbar/Navbar";
import TableComponent from "../../components/TableComponent/TableComponent";
import imag1 from "../../img/samsung.svg";
import imag2 from "../../img/logo-lg.svg";
import imag3 from "../../img/beko-2.svg";
import imag4 from "../../img/bosch.svg";
import imag5 from "../../img/imag5.svg";

const Card = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex flex-wrap">
          <ul className="nav nav-tabss flex-column" role="tablist">
            {[{ tabIndex: 1, image: imag1 },
            { tabIndex: 2, image: imag2 },
            { tabIndex: 3, image: imag3 },
            { tabIndex: 4, image: imag4 },
            ].map((tab) => (
              <li
                key={tab.tabIndex}
                className={`nav-item ${activeTab === tab.tabIndex ? "active" : ""}`}
                onClick={() => handleTabClick(tab.tabIndex)}
              >
                <a
                  className="nav-link"
                  href={`#tab-${tab.tabIndex}`}
                  aria-controls={`tab-${tab.tabIndex}`}
                  role="tab"
                  data-toggle="tab"
                >
                  <div className="link">
                    <img src={tab.image} alt={`Tab ${tab.tabIndex}`} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
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
