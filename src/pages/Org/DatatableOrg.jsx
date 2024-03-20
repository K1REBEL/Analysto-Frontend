import React, { useEffect, useState } from "react";
import "./DatatableOrg.scss";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function DatatableOrg() {
  const [orgEmpl, setOrgEmpl] = useState([]);
  const [userToken, setUserToken] = useState(""); 

  useEffect(() => {
    async function fetchToken() {
      const fetchedToken = localStorage.getItem("userToken"); 
      setUserToken(fetchedToken);
      console.log(fetchedToken);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${fetchedToken}`
          }
        };
        const { data } = await axios.get(`http://127.0.0.1:4000/api/org/empIndex`, config);
        setOrgEmpl(data.result);
        console.log(data.result);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    
    fetchToken();
  }, []); 

  return (
    <div>
      <form>
        <div className="field row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
          {orgEmpl.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="number" className="form-control" value={item.id} />
              </td>
              <td>
                <input type="text" className="form-control" value={item.name} />
              </td>
              <td>
                <input type="email" className="form-control" value={item.email} />
              </td>
              <td>
                <button type="button" className="btn btn-danger btn-sm">
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
