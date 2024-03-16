import React, { useState } from "react";
import "../Auth/Request.scss";
import imag1 from "../../img/imag1.svg";
import check from "../../img/check.svg";

export default function Request() {
  const [error, setError] = useState("");
  const [org, setOrg] = useState({
    org_name: " ",
    social_media: "",
    reply_email: "",
    reply_phone: "",
    niche: "",
    region: "",
    avg_revenue: 0,
  });

  function getOrgData(eventInfo) {
    let myOrg = { ...org };
    myOrg[eventInfo.target.name] = eventInfo.target.value;
    setOrg(myOrg);
    console.log(myOrg);
  }

  async function sendRequestDataToApi() {
    try {
      const response = await fetch("http://127.0.0.1:4000/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(org),
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "success") {
        console.log(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
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
                <button
                  type="button"
                  onClick={submitRequestForm}
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  send Request
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
