import React from "react";
import "../Admins/Edit.css"
import Navbar from "../../components/Navbar/Navbar";

const Edit = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-between border-bottom mb-5">
            <div>
              <h3>Edit employee</h3>
            </div>
          </div>
          <form action="" method="post">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>

            <button type="submit" className="btn" name="submit" value="add">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Edit;
