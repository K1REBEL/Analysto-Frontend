import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import axios from "axios"; 
import "../Auth/Login.scss";

export default function Login({saveUserData}) {
  let navigate = useNavigate();
  const [errorList, seterrorList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
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
      console.log(data);

      if (data.message === "Admin found") {
        setisLoading(false);
        localStorage.setItem('userToken' , data.token);
        navigate("/admin");
        saveUserData();
      }else if (data.message === "Organization found"){
        setisLoading(false);
        localStorage.setItem('userToken' , data.token);
        navigate("DataLink");
        saveUserData();
      }else if (data.message === "Employee found"){
        setisLoading(false);
        localStorage.setItem('userToken' , data.token);
        navigate("/DataLink");
        saveUserData();
      }else {
        setisLoading(false);
        setError(data.message);
      }
    } catch (error) {
      setisLoading(false);
      console.log(error);
      setError("An error occurred while logging in.");
    }
  }
  function submitLoginForm(e) {
    e.preventDefault();
    setisLoading(true);
    let validation = validateLoginForm();
    console.log(validation);
    if (validation.error) {
      setisLoading(false);
      seterrorList(validation.error.details);
    } else {
      sendLoginDataToApi();
    }
  }

  function validateLoginForm() {
    let scheme = joi.object({
      email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: joi.string().messages({
        "string.pattern.base":
          "Password should start with an uppercase letter and have 3 to 6 lowercase letters.",
      }),
    });
    return scheme.validate(user, { abortEarly: false });
  }

  return (
    <section className="logApp">
      <div className="Logincon">
        <div className="container">
          <h2 className="login">Login</h2>
          {/* validation */}
          {errorList.map((err, index) => {
            if (err.context.label === "password") {
              return (
                <div key={index} className="alert alert-danger my-2">
                  Password invalid
                </div>
              );
            } else {
              return (
                <div key={index} className="alert alert-danger my-2">
                  {err.message}
                </div>
              );
            }
          })}

          {error.length > 0 && (
            <div className="alert alert-danger my-2">{error}</div>
          )}

          <form onSubmit={submitLoginForm} id="form" className="flex flex-col">
            <input
              onChange={getUserData}
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              onChange={getUserData}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <button type="submit" className="btn">
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
