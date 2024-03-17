import React, { useState } from "react";
import "../Auth/Request.scss";
import imag1 from "../../img/imag1.svg";
import check from "../../img/check.svg";
import axios from "axios";
import Joi from "joi";
import { BiSolidErrorCircle } from "react-icons/bi";


export default function Request() {
  const [errorList, seterrorList] = useState([]);
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
    referral_method: "",
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
        setShowModal(false);
        setisLoading(false);
      }
    } catch (error) {
      setisLoading(false);
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
      referral_method: Joi.string().required(),
    });
    return schema.validate(org, { abortEarly: true });
  }

  return (
    <>
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
                {errorList.filter(
                  (err) => err.context.label === "org_name"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "org_name"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}

                <input
                  onChange={getOrgData}
                  type="link"
                  placeholder="Social Media"
                  name="social_media"
                />

{errorList.filter(
                  (err) => err.context.label === "social_media"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "social_media"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}

                <input
                  onChange={getOrgData}
                  type="email"
                  placeholder="Contact E-mail"
                  name="reply_email"
                />
                    {errorList.filter(
                  (err) => err.context.label === "reply_email"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "reply_email"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
                <input
                  onChange={getOrgData}
                  type="tel"
                  placeholder="Enter Your Phone"
                  name="reply_phone"
                />
                      {errorList.filter(
                  (err) => err.context.label === "reply_phone"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "reply_phone"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
                <input
                  onChange={getOrgData}
                  type="text"
                  placeholder="Niche"
                  name="niche"
                />
                  {errorList.filter(
                  (err) => err.context.label === "niche"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "niche"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
                <input
                  onChange={getOrgData}
                  type="text"
                  placeholder="Enter Your Location"
                  name="region"
                />
                    {errorList.filter(
                  (err) => err.context.label === "region"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "region"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
                <input
                  onChange={getOrgData}
                  type="Number"
                  placeholder="Average Revenue In The Last Quarter"
                  name="avg_revenue"
                />
                  {errorList.filter(
                  (err) => err.context.label === "avg_revenue"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "avg_revenue"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
                <input
                  onChange={getOrgData}
                  type="text"
                  placeholder="Enter referral_method "
                  name="referral_method"
                />
                  {errorList.filter(
                  (err) => err.context.label === "referral_method"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "referral_method"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
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
