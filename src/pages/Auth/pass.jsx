import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "../Auth/pass.scss";

export default function Pass({  saveUserData, setuserRole, userRole}) {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [userToken, setUserToken] = useState(""); 
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
      const fetchedToken = localStorage.getItem("userToken"); 
      setUserToken(fetchedToken);
      console.log(fetchedToken);
  
      setisLoading(true); 
  
      let apiUrl = "";
  
      if (userRole === "organization") {
        apiUrl = "http://127.0.0.1:4000/api/org/setOrgPass";
      } else if (userRole === "employee") {
        apiUrl = "http://127.0.0.1:4000/api/emp/setEmpPass";
      }
  
      const response = await axios.patch(apiUrl, user, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${fetchedToken}`
        }
      });
  
      const data = response.data;

      console.log(data);
      console.log(data.token); 
  
      if (data.message === "Password reset!") {
        saveUserData();
        if (userRole === 'organization') {
          navigate("datalink");
        } else if (userRole === 'employee') {
          navigate("/card");
        }
        setuserRole();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while resetting password.");
    } finally {
      setisLoading(false); 
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
                  value={user.newPassword}
                  required
                />
                <input
                  onChange={getUserData}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={user.confirmPassword}
                  required
                />
                <button className="btn" type="submit" disabled={isLoading}>
                  {isLoading ? 'Changing Password...' : 'Change Password'}
                </button>
              </form>
              {error && <div className="error-message">{error}</div>}
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