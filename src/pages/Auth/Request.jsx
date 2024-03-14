import React from "react";
import "../Auth/Request.scss";
import imag1 from "../../img/imag1.svg";
import Joi from "joi";

const Request = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      organization_Name: e.target.orgName.value,
      Nish: e.target.Nish.value,
      location: e.target.Location.value,
      email: e.target.email.value,
      average_rev: e.target.revenue.value,
    };

    const schema = Joi.object({
      organization_Name: Joi.string().pattern(/^[A-Z]/).required(),
      Nish: Joi.string().required(),
      location: Joi.string().required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      average_rev: Joi.number().required(),
    });

    const { error } =
     schema.validate(formData ,{abortEarly:false});
    if (error) {
      alert(error.details[0].message);
      return;
    } 

  }; 

  return (
    <>
      <div className="Req-form">
        <div className="contain">
          <div className="mainn">
            <div className="conten">
              <h2>Request</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Organization Name"
                  name="org_Name"
                />

            <input type="link" placeholder="Social Media" name="email" />

                <input type="email" placeholder="Contact E-mail" name="email" />
                <input type="tel" placeholder="Enter Your Phone" name="email" />

                <input
                  type="Number"
                  placeholder="Average Revenue In The Last Quarter"
                  name="revenue"
                />
                 <input type="text" placeholder="Nish" name="Nish" />
                <input
                  type="text"
                  placeholder="Enter Your Location"
                  name="Location"
                />
                <button type="submit" className="btn btn-info">
                  Register
                </button>
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
};

export default Request;
