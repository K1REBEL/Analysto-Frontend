import React from "react";
import "../Auth/Login.scss"
 
  function Login() {
  return (
    <section className="App">
      <div className="Login">
        <div className="container">
          <h2 className="login">Login</h2>
          <form id="form" className="flex flex-col">
            <input type="email" placeholder="Enter You Email" />
            <input type="Password" placeholder="Enter Password " />
            <button className="btn">Send Reqiuest </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;