import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DatatableOrg.scss";

function DatatableOrg({ saveUserData }) {
  const [orgEmpl, setOrgEmpl] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const getUserData = (eventinfo) => {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
    console.log(myUser);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedToken = localStorage.getItem("userToken");
        setUserToken(fetchedToken);

        const config = {
          headers: {
            Authorization: `Bearer ${fetchedToken}`,
          },
        };

        const { data } = await axios.get(
          "http://127.0.0.1:4000/api/org/empIndex",
          config
        );

        setOrgEmpl(data.result);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();
  }, []);

  async function sendEmployeeDataToApi() {
    try {
      console.log("User data being sent:", user);
      const response = await axios.post(
        "http://127.0.0.1:4000/api/emp/addEmp",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = response.data;

      if (data.message === "Data inserted successfully") {
        setUser({
          name: "",
          email: "",
          pass: "",
        });

        console.log("User state after submission:", user);

        const updatedEmployeesResponse = await axios.get(
          "http://127.0.0.1:4000/api/org/empIndex",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        setOrgEmpl(updatedEmployeesResponse.data.result);
      }
    } catch (error) {
      console.error("Error occurred while sending employee data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await sendEmployeeDataToApi();
  };

  async function deleteEmployee(id) {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:4000/api/org/emp/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log(response.data);

      setOrgEmpl(orgEmpl.filter((employee) => employee.id !== id));

      saveUserData();
    } catch (error) {
      console.error("Error occurred while deleting employee:", error);
    }
  }

  return (
    <div className="datatable-org">
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <h2>Employees Table</h2>
        <div className="row mb-3">
          <div className="col">
            <input
              onChange={getUserData}
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              name="name"
              value={user.name}
            />
          </div>
          <div className="col">
            <input
              onChange={getUserData}
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              value={user.email}
            />
          </div>
          <div className="col">
            <input
              onChange={getUserData}
              type="password"
              className="form-control"
              placeholder="Password"
              name="pass"
              value={user.pass}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">
              Add User
            </button>
          </div>
        </div>
      </form>

      <div className="table-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orgEmpl.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DatatableOrg;
