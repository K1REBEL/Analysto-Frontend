import React, { useState, useEffect } from "react";
import "./DatatableOrg.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// import axios from "axios";

function DatatableOrg() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id, name, email }]);
    setName("");
    setEmail("");
    setPassword("");
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
              <i className="fa fa-plus" aria-hidden="true"></i>Add User
            </button>
          </div>
        </div>
      </form>
      <table className="table align-middle border mb-0 bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Users</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{user.name}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{user.email}</p>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-rounded"
                >
                  Config
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm btn-rounded"
                  onClick={() => handleDelete(user.id)}

                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </div>
  );
}

export default DatatableOrg;
