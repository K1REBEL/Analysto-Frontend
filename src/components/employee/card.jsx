import React, { useState } from "react";
import "./card.scss";
import imag1 from "../../img/beko-2.svg";
import imag2 from "../../img/samsung.svg";
import imag3 from "../../img/cdnlogo.com_zanussi.svg";
import imag4 from "../../img/bosch.svg";
import imag5 from "../../img/imag5.svg";

const Card = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImage, setActiveImage] = useState(null);
  const [showInputRow, setShowInputRow] = useState(false);
  const [inputRowCount, setInputRowCount] = useState(0);
  const [editMode, setEditMode] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [inputValues2, setInputValues2] = useState({});

  const handleAddProductClick = () => {
    setShowInputRow(true);
    setInputRowCount(inputRowCount + 1);
    setEditMode({ ...editMode, [inputRowCount]: true });
    setInputValues({ ...inputValues, [inputRowCount]: "" });
    setInputValues2({ ...inputValues2, [inputRowCount]: "" });
  };

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
              <div className="row mb-3">
                <div className="col d-flex justify-content-end">
                  <button
                    className="btn btn-primary ml-2"
                    onClick={handleAddProductClick}
                  >
                    Add Proudect
                  </button>
                </div>
              </div>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">SKUs</th>

                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {showInputRow &&
                    Array.from({ length: inputRowCount }, (_, index) => (
                      <tr key={index}>
                        <td>
                          {editMode[index] ? (
                            <input
                              type="text"
                              className="form-control"
                              value={inputValues[index]}
                              onChange={(e) =>
                                setInputValues({
                                  ...inputValues,
                                  [index]: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p>{inputValues[index]}</p>
                          )}
                        </td>
                        <td>
                          {editMode[index] ? (
                            <input
                              type="text"
                              className="form-control"
                              value={inputValues2[index]}
                              onChange={(e) =>
                                setInputValues2({
                                  ...inputValues2,
                                  [index]: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p>{inputValues2[index]}</p>
                          )}
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setEditMode({
                                ...editMode,
                                [index]: !editMode[index],
                              });
                              if (!editMode[index]) {
                                // Save logic here
                              }
                            }}
                          >
                            {editMode[index] ? "Save" : "Config"}
                          </button>
                          <button className="btn btn-danger">Delete</button>
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

              <div className="row mb-3">
                <div className="col d-flex justify-content-end">
                  <button
                    className="btn btn-primary ml-2"
                    onClick={handleAddProductClick}
                  >
                    Add Proudect
                  </button>
                </div>
              </div>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">SKUs</th>

                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {showInputRow &&
                    Array.from({ length: inputRowCount }, (_, index) => (
                      <tr key={index}>
                        <td>
                          {editMode[index] ? (
                            <input
                              type="text"
                              className="form-control"
                              value={inputValues[index]}
                              onChange={(e) =>
                                setInputValues({
                                  ...inputValues,
                                  [index]: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p>{inputValues[index]}</p>
                          )}
                        </td>
                        <td>
                          {editMode[index] ? (
                            <input
                              type="text"
                              className="form-control"
                              value={inputValues2[index]}
                              onChange={(e) =>
                                setInputValues2({
                                  ...inputValues2,
                                  [index]: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p>{inputValues2[index]}</p>
                          )}
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setEditMode({
                                ...editMode,
                                [index]: !editMode[index],
                              });
                              if (!editMode[index]) {
                                // Save logic here
                              }
                            }}
                          >
                            {editMode[index] ? "Save" : "Config"}
                          </button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div
              className={`tab-pane ${activeTab === 3 ? "active" : ""}`}
              id="messages"
            >
              {/*======================= tabs b-tech =================*/}

              <div className="row mb-3">
                <div className="col d-flex justify-content-end">
                  <button
                    className="btn btn-primary ml-2"
                    onClick={handleAddProductClick}
                  >
                    Add Proudect
                  </button>
                </div>
              </div>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">SKUs</th>

                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {showInputRow &&
                    Array.from({ length: inputRowCount }, (_, index) => (
                      <tr key={index}>
                        <td>
                          {editMode[index] ? (
                            <input
                              type="text"
                              className="form-control"
                              value={inputValues[index]}
                              onChange={(e) =>
                                setInputValues({
                                  ...inputValues,
                                  [index]: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p>{inputValues[index]}</p>
                          )}
                        </td>
                        <td>
                          {editMode[index] ? (
                            <input
                              type="text"
                              className="form-control"
                              value={inputValues2[index]}
                              onChange={(e) =>
                                setInputValues2({
                                  ...inputValues2,
                                  [index]: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p>{inputValues2[index]}</p>
                          )}
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setEditMode({
                                ...editMode,
                                [index]: !editMode[index],
                              });
                              if (!editMode[index]) {
                                // Save logic here
                              }
                            }}
                          >
                            {editMode[index] ? "Save" : "Config"}
                          </button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div
              className={`tab-pane ${activeTab === 4 ? "active" : ""}`}
              id="settings"
            >
              <div className="row">
                <div className="row mb-3">
                  <div className="col d-flex justify-content-end">
                    <button
                      className="btn btn-primary ml-2"
                      onClick={handleAddProductClick}
                    >
                      Add Proudect
                    </button>
                  </div>
                </div>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">SKUs</th>

                      <th scope="col">Category</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showInputRow &&
                      Array.from({ length: inputRowCount }, (_, index) => (
                        <tr key={index}>
                          <td>
                            {editMode[index] ? (
                              <input
                                type="text"
                                className="form-control"
                                value={inputValues[index]}
                                onChange={(e) =>
                                  setInputValues({
                                    ...inputValues,
                                    [index]: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <p>{inputValues[index]}</p>
                            )}
                          </td>
                          <td>
                            {editMode[index] ? (
                              <input
                                type="text"
                                className="form-control"
                                value={inputValues2[index]}
                                onChange={(e) =>
                                  setInputValues2({
                                    ...inputValues2,
                                    [index]: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <p>{inputValues2[index]}</p>
                            )}
                          </td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                setEditMode({
                                  ...editMode,
                                  [index]: !editMode[index],
                                });
                                if (!editMode[index]) {
                                  // Save logic here
                                }
                              }}
                            >
                              {editMode[index] ? "Save" : "Config"}
                            </button>
                            <button className="btn btn-danger">Delete</button>
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
  );
};

export default Card;
