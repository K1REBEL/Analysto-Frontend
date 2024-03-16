import React, { useState } from "react";
import "../Auth/Request.scss";
import { useNavigate } from "react-router-dom";
import imag1 from "../../img/imag1.svg";
import check from "../../img/check.svg";
import axios from "axios";

export default function Request() {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [org, setOrg] = useState({
    org_name: " ",
    social_media: "",
    reply_email: "",
    reply_phone: "",
    niche: "",
    region: "",
    avg_revenue: 0,
    referral_method:"non"
  });

  function getOrgData(eventInfo) {
    let myOrg = { ...org };
    myOrg[eventInfo.target.name] = eventInfo.target.value;
    setOrg(myOrg);
  }

  async function sendRequestDataToApi() {
    try {
      const response = await axios.post("http://127.0.0.1:4000/api/requests", org);
      const data = response.data;
      if (data.message === "Data inserted successfully") {
        setisLoading(false);
        navigate("/DataLink");
      } else {
        setisLoading(false);
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
    sendRequestDataToApi();
  }

  return (
    <>
      {error.length > 0 ? (
        <div className="alert alert-danger my-2">{error} </div>
      ) : (
        ""
      )}

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
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {isLoading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "send Request"
                  )}
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Congratulation!
                        </h5>
                      </div>
                      <div class="modal-body">
                        Your request has been sent successfully!
                      </div>
                      <img className="check" src={check} alt="" />
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="form-image">
              <img src={imag1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
