import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Org/DatatableOrg.scss";

function AdminTable({ saveUserData }) {
  const [adminOrg, setadminOrg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({
    id:"",
    name: "",
    email: "",
    niche: "",
    region: "",
    phone: "",
  });
  

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
          "http://127.0.0.1:4000/api/admin/orgIndex",
          config
        );

        setadminOrg(data.result);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();
  }, []);
//////////////////////////////////////////////////////////////patch 
  const handleSwitchChange = async (isChecked, id) => {
    try {
      let endpoint;
      if (isChecked === false) {
        endpoint = `http://127.0.0.1:4000/api/org/freeze/${id}`;
      } else if(isChecked === true)
      {
        endpoint = `http://127.0.0.1:4000/api/org/restore/${id}`;
      }
      console.log(isChecked);
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
  console.log(id);
      await axios.patch(endpoint, null, config);
  
      // Fetch updated organization data
      const { data } = await axios.get(
        "http://127.0.0.1:4000/api/admin/orgIndex",
        config
      );
  
      // Update adminOrg state with the updated organization data
      setadminOrg(data.result);
      console.log(data.result);
    } catch (error) {
      console.error("Error toggling switch:", error);
    }
  };
  

  return (
    <div>
      <table className="table align-middle border mb-0 bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Head Email</th>
            <th>niche</th>
            <th>region</th>
            <th>phone</th>
            <th>config</th>
          </tr>
        </thead>
        <tbody>
          {adminOrg.map((item, index) => (
            <tr key={index}>
              <td name="Name">{item.name}</td>
              <td name="email">{item.email}</td>
              <td name="niche">{item.niche}</td>
              <td name="region">{item.region}</td>
              <td name="phone">{item.phone}</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={`switchCheckDefault_${index}`}
                    onChange={(e) =>
                      handleSwitchChange(e.target.checked, item.id)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`switchCheckDefault_${index}`}
                  ></label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
