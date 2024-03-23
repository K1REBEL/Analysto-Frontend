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
  ////////////////////////////////////////// get employees /////////////////////////////////////
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
  //////////////////////////////////////////// add employees ///////////////////////////////////

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
          name:"",
          email:"",
          pass:"",
        });

        console.log("User state after submission:", user); // Log the user state after submission

        // Fetch updated employees list
        const updatedEmployeesResponse = await axios.get(
          "http://127.0.0.1:4000/api/org/empIndex",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        // Update the employees state with the updated list
        setOrgEmpl(updatedEmployeesResponse.data.result);
        // saveUserData();
      }
    } catch (error) {
      console.error("Error occurred while sending employee data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await sendEmployeeDataToApi();
  };
  
///////////////////////////////////////////// delete employees ////////////////////////////

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
    <div class="table-wrap">
      <form onSubmit={handleSubmit}>
        <div className="field row mb-3">
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

          <div className="col-4">
            <button
              type="submit"
              className="btn btn-sm btn-success"
            
            >
              add User
            </button>
          </div>
        </div>
      </form>

      <table className="table align-middle border mb-0 bg-white">
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
                  className="btn btn-danger btn-sm"
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
  );
}

export default DatatableOrg;
