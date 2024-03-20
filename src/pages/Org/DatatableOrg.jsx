import React, { useState } from "react";
import "./DatatableOrg.scss";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "autoprefixer";

function DatatableOrg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emp, setEmp] = useState([]);

// const [user, setUser] = useState({
//   id: "",
//   name: "",
//   email: "",
// });


const getData = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:4000/api/org/1/empIndex", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      },
    });
    const data = response.data;
    console.log(data);
    if (data.message === "Organization's Employees Retrieved") {
      setEmp(data.employees);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  console.log(data)
};
  

const handleDelete = async (id) => {
  try {
    const updatedEmp = emp.filter((emp) => emp.id !== id);
    console.log("Delete user with id:", id);
    setEmp(updatedEmp);
    localStorage.setItem("emp", JSON.stringify(updatedEmp));

    await axios.delete(`http://127.0.0.1:4000/api/org/1/emp/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      },
    });

    getData(); // Refresh the data after deleting
    console.log(updatedEmp);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
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
