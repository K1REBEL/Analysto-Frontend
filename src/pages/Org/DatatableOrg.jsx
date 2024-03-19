import React, { useState, useEffect } from "react";
import "./DatatableOrg.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function DatatableOrg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emp, setEmp] = useState([]);
 

  const getData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:4000/api/org/empIndex");
      const data = await response.json();
      console.log(data); // Check the console to see the actual data structure
      if (data.message === "Organization's Employees Retrieved") {
        setEmp(data.employees); // Assuming 'employees' is the correct property in your API response
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    const updatedEmp = emp.filter((emp) => emp.id !== id);
    console.log("Delete user with id:", id);
    setEmp(updatedEmp);
    localStorage.setItem("emp", JSON.stringify(updatedEmp));
    getData();
    console.log(updatedEmp);
  };

  return (
    <div>
      <form>
        <div className="field row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-4">
            <button type="submit" className="btn btn-sm btn-success">
              Add User
            </button>
          </div>
        </div>
      </form>
      <table className="table align-middle border mb-0 bg-white">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((user) => {
            return (
              <tr>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={user.id}
                    
                  />

                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{user.id}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={user.name}
                
                  />

                  <p className="fw-normal mb-1">{user.name}</p>
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    value={user.email}
                   
                  />

                  <p className="fw-normal mb-1">{user.email}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DatatableOrg;
