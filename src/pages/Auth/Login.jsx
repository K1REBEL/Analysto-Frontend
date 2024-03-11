import React from "react";
import "../Auth/Login.scss"
 
  function Login() {
  return (
    <section className="App">
      <div className="Request">
        <div className="col-1">
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