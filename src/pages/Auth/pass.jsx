import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "../Auth/pass.scss";

export default function Pass({ saveUserData, setuserRole }) {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState({
    newPassword: '',
  });
  
  function getUserData(eventinfo) {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  async function changepass() {
    try {
      const response = await axios.patch("http://127.0.0.1:4000/api/org/setOrgPass", user, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = response.data;
      console.log(data);

      if (data.message === "Password reset!") {
        setisLoading(false);
        localStorage.setItem("userToken", data.token);
        navigate("/pass");
        saveUserData();
        setuserRole();
      } else {
        setisLoading(false);
        setError(data.message);
      }
    } catch (error) {
      setisLoading(false);
      console.log(error);
      setError("An error occurred while resetting password.");
    }
  }

  function submitPassForm(e) {
    e.preventDefault();

    // Add validation to check if newPassword matches confirmPassword
    if (user.newPassword !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    changepass();
  }
  
  return (
    <>
      <div className="login-form">
        <div className="container">
          <div className="main">
            <div className="content" >
              <h2>Set Your Own Password</h2>
              
              <form onSubmit={submitPassForm}>
                <input
                  onChange={getUserData}
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={user.newPassword} // Adding value attribute
                  required
                />
                <input
                  onChange={getUserData}
                  type="password"
                  name="confirmPassword" // Fixing input name for confirmation password
                  placeholder="Confirm Password"
                  value={user.confirmPassword} // Adding value attribute
                  required
                />
                <button className="btn" type="submit">
                  Change Password
                </button>
              </form>
            </div>
            <div className="form-img">
              <img src="/images/My-Password.png" alt="Password" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
