import React from 'react';
import '../Auth/pass.css'; 

const Pass = () => {
  return (
    <>
      <div className="login-form">
        <div className="container">
          <div className="main">
            <div className="content">
              <h2>set your own password</h2>
              <form action="" method="post">
                <input type="password" name="" placeholder="New Password" required/>
                <input type="password" name="" placeholder="confirm password" required/>
                <button className="btn" type="submit">login</button>
              </form>
            </div>
            <div className="form-img">
              <img src="/images/My-Password.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pass;
