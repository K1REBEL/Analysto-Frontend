import React, { useState } from "react";
import "../Auth/Request.scss";
import { useNavigate } from "react-router-dom";
import imag1 from "../../img/imag1.svg";
import check from "../../img/check.svg";
import axios from "axios";
import Joi from "joi";

export default function Request() {
  let navigate = useNavigate();
  const [errorList, seterrorList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [org, setOrg] = useState({
    org_name: " ",
    social_media: "",
    reply_email: "",
    reply_phone: "",
    niche: "",
    region: "",
    avg_revenue: "",
    referral_method: ""
  });



  function getOrgData(eventInfo) {
    let myOrg = { ...org };
    myOrg[eventInfo.target.name] = eventInfo.target.value;
    setOrg(myOrg);
  }

  async function sendRequestDataToApi() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/api/requests",
        org
      );
      const data = response.data;
      if (data.message === "Data inserted successfully") {
        setisLoading(false);
        setShowModal(true);
      } else {
        setisLoading(false);
        navigate("/DataLink");
        setError(data.message);
      }
    } catch (error) {
      setisLoading(false);
      console.error("Failed to fetch:", error);
      setError("Failed to send request data");
    }
  }

  function submitRequestForm(e) {
    e.preventDefault();
    let validation = validateRequestForm();
    if (validation.error) {
      setisLoading(false);
      seterrorList(validation.error.details);
    } else {
      sendRequestDataToApi();
    }
  }

  //validation

  function validateRequestForm() {
    const schema = Joi.object({
      org_name: Joi.string().min(2).max(40).required(),
      social_media: Joi.string().required(),
      reply_email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      reply_phone: Joi.string().required(),
      niche: Joi.string().required(),
      region: Joi.string().required(),
      avg_revenue: Joi.number().required(),
      referral_method: Joi.string().required()
    });
    return schema.validate(org, { abortEarly: true });
  }

  return (
    <>
      {errorList.map((err, index) => (
        <div key={index} className="alert alert-danger my-2">
          {err.message}{" "}
        </div>
      ))}
      {/* {error.length > 0 ? (
        <div className="alert alert-danger my-2">{error} </div>
      ) : (
        ""
      )} */}

      <div className="Req-form">
        <div className="contain">
          <div className="mainn">
            <div className="conten">
              <h2>Request</h2>
              <form onSubmit={submitRequestForm}>
                <input
                  onChange={getOrgData}
                  type="text"
                  placeholder="Enter Organization Name"
                  name="org_name"
                />
                <div className="alert alert-danger my-2">
                  {errorList.filter((err)=> err.context.label ==='Firt_Name')[0]}
               
                </div>
                <input
                  onChange={getOrgData}
                  type="link"
                  placeholder="Social Media"
                  name="social_media"
                />
                <input
                  onChange={getOrgData}
                  type="email"
                  placeholder="Contact E-mail"
                  name="reply_email"
                />
                <input
                  onChange={getOrgData}
                  type="tel"
                  placeholder="Enter Your Phone"
                  name="reply_phone"
                />
                <input
                  onChange={getOrgData}
                  type="text"
                  placeholder="Niche"
                  name="niche"
                />
                <input
                  onChange={getOrgData}
                  type="text"
                  placeholder="Enter Your Location"
                  name="region"
                />
                <input
                  onChange={getOrgData}
                  type="Number"
                  placeholder="Average Revenue In The Last Quarter"
                  name="avg_revenue"
                />
                <input
                  onChange={getOrgData}
                  type="text"
                  placeholder="Enter referral_method "
                  name="referral_method"
                />
                <button
                  type="submit"
                  className="btn btn-info"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "Send Request"
                  )}
                </button>
              </form>
            </div>
            <div className="form-image">
              <img src={imag1} alt="" />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Congratulation!
                </h5>
              </div>
              <div className="modal-body">
                Your request has been sent successfully!
              </div>
              <img className="check" src={check} alt="" />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}