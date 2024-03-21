import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import axios from "axios"; 
import "../Auth/Login.scss";

export default function Login({ saveUserData }) {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function getUserData(eventinfo) {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
  }

  async function sendLoginDataToApi() {
    try {
      const response = await axios.post("http://127.0.0.1:4000/api/auth/signIn", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;

      if (data.message === "Admin found") {
        localStorage.setItem('userToken', data.token);
        navigate("/admin");
        saveUserData();
      } else if ((data.message === "Organization found" || data.message === "Employee found") && data.password_set === 0) {
        navigate("/pass");
      } else if (data.message === "Organization found") {
        navigate("/datalink");
      } else if (data.message === "Employee found") {
        navigate("/card")
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    } finally {
      setIsLoading(false);
    }
  }

  function submitLoginForm(e) {
    e.preventDefault();
    setIsLoading(true);
    const validation = validateLoginForm();

    if (validation.error) {
      setErrorList(validation.error.details);
    } else {
      sendLoginDataToApi();
    }
  }

  function validateLoginForm() {
    const schema = joi.object({
      email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
      password: joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <section className="logApp">
      <div className="Logincon">
        <div className="container">
          <h2 className="login">Login</h2>
          {/* Display error messages */}
          {errorList.map((err, index) => (
            <div key={index} className="alert alert-danger my-2">{err.message}</div>
          ))}
          {error && <div className="alert alert-danger my-2">{error}</div>}
          <form onSubmit={submitLoginForm} id="form" className="flex flex-col">
            <input
              onChange={getUserData}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              disabled={isLoading}
            />
            <input
              onChange={getUserData}
              type="password"
              name="password"
              placeholder="Enter Password"
              disabled={isLoading}
            />
            <button type="submit" className="btn" disabled={isLoading}>
              {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
