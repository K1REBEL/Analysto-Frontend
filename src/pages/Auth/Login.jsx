import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import axios from "axios";
import "../Auth/Login.scss";
import { BiSolidErrorCircle } from "react-icons/bi";


export default function Login({ saveUserData }) {
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
      const response = await axios.post(
        "http://127.0.0.1:4000/api/auth/signIn",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      // console.log( data.emp.password_set);
      // console.log( data.orgUser.password_set);

      if (data.message === "Admin found") {
        setisLoading(false);
        localStorage.setItem("userToken", data.token);
        navigate("/admin");
      } else if (data.message === "Organization found") {
        setisLoading(false);
        localStorage.setItem("userToken", data.token);
        // saveUserData();
        if (data.orgUser.password_set === 0) {
          navigate("/pass");
        } else {
          navigate("/datalink");
        }
        saveUserData(data);
      } else if (data.message === "Employee found") {
        setisLoading(false);
        localStorage.setItem("userToken", data.token);
        if (data.emp.password_set === 0) {
          navigate("/pass");
        } else {
          navigate("/card");
        }
        saveUserData(data);
      } else {
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
        
      password: joi
        .string()
        // .pattern(/^[A-Z][a-z]{3,6}$/)
        // .messages({
        //   "string.pattern.base":
        //     "invalid Password .",
        // }),
    });
    return scheme.validate(user, { abortEarly: false });
  }

  return (
    <section className="logApp">
      <div className="Logincon">
        <div className="container">
          <h2 className="login">Login</h2>
     

          <form onSubmit={submitLoginForm} id="form" className="flex flex-col">

            <input
              onChange={getUserData}
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            {/* ////// */}
            {errorList.filter(
                  (err) => err.context.label === "email"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "email"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
{/* /////// */}

            <input
              onChange={getUserData}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            {errorList.filter(
                  (err) => err.context.label === "password"
                  )[0] ? (
                    
                    <p className="text-danger">
                      <BiSolidErrorCircle />
                      {
                        errorList.filter(
                          (err) => err.context.label === "password"
                          )[0]?.message
                        }

                    </p>
                
                ) : (
                  ""
                )}
           <button type="submit" className="btnn" style={{ border: '1px solid #e9ecef', padding: '0.9em 1em' }}>
  Login
</button>

          </form>
        </div>
      </div>
    </section>
  );
}
