import React, { useState, useEffect } from "react";
import "./DatatableOrg.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function DatatableOrg() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const user = users.find((user) => user.id === id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleSave = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === editingId) {
        return { ...user, name, email };
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditingId(null);
    setName("");
    setEmail("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setName("");
    setEmail("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }
  
    if (editingId === null) {
      const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      setUsers([...users, { id, name, email }]);
    } else {
      // Handle editing existing user
      const updatedUsers = users.map((user) => {
        if (user.id === editingId) {
          return { ...user, name, email };
        }
        return user;
      });
      setUsers(updatedUsers);
      setEditingId(null);
    }
  
    setName("");
    setEmail("");
    setPassword("");
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} >
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
            
              <button  type="submit" className="btn btn-sm btn-success">
                Add User
              </button>
            
          </div>
        </div>
      </form>
      <table className="table align-middle border mb-0 bg-white">
  <thead>
    <tr>
     
      <th>Users</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
       
        <td>
          {editingId === user.id ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="fw-bold mb-1">{user.name}</p>
              </div>
            </div>
          )}
        </td>
        <td>
          {editingId === user.id ? (
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <p className="fw-normal mb-1">{user.email}</p>
          )}
        </td>
        <td>
          {editingId === user.id ? (
            <>
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm ms-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <i
              className="fas fa-pen-to-square"
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => handleEdit(user.id)}
            ></i>
          )}
          <i
            className="fas fa-trash"
            style={{ color: "#c70000", cursor: "pointer" }}
            onClick={() => handleDelete(user.id)}
          ></i>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}

export default DatatableOrg;
