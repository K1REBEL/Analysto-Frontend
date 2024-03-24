import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GetRequest.scss";

function RequestCard() {
  const [orgreq, setOrgreq] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
    niche: "",
    region: "",
    phone: "",
  });

  function getUserData(eventinfo) {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
  }
  // console.log(user.name)
  ////////////////////////////////////////////get requests///////////////////////
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
          "http://127.0.0.1:4000/api/admin/requests",
          config
        );

        setOrgreq(data.result);
        console.log(data.result);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    }

    fetchData();
  }, []);
  ////////////////////////////////////////////reject request///////////////////////
  const handleRejectRequest = async (id) => {
    try {
      let endpoint = `http://127.0.0.1:4000/api/admin/rejReq/${id}`;

      console.log(id);
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      // console.log(id);
      await axios.patch(endpoint, null, config);

      // Fetch updated organization data
      const { data } = await axios.get(
        "http://127.0.0.1:4000/api/admin/requests",
        config
      );

      setOrgreq(data.result);
      // console.log(data.result);
      // console.log(data.result);
    } catch (error) {
      console.error("Error toggling switch:", error);
    }
  };
  ////////////////////////////////////////////Accept request///////////////////////
  const handleAcceptRequest = async () => {
    const fetchedToken = localStorage.getItem("userToken");
    setUserToken(fetchedToken);
    console.log(fetchedToken);

    let apiUrl = "http://127.0.0.1:4000/api/org/addorg";

    const response = await axios.post(apiUrl,
      //  user,
      {
        "name": "Electrozone",
        "email": "electro@gmail.com",
        "pass": "123",
        "niche": "electronics",
        "region": "egypt",
        "phone": "01001980478"
      } ,
       {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${fetchedToken}`,
      },
      body:{
        name:"amazone"
      },
    });

    const data = response.data;

    console.log(data);
    console.log(data.token);
  };
/////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="requests d-flex justify-content-evenly align-items-center flex-column p-5 m-5">
      <div className="container">
        {orgreq.map((item, index) => (
          <div key={index} className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-white mb-5">
                  <div className="card-heading clearfix border-bottom mb-4">
                    <center>
                      <h4 className="card-title">Accept Requests</h4>
                    </center>
                  </div>
                  <div className="card-body">
                    <p
                      style={{
                        color: "red",
                        top: "10px",
                        right: "10px",
                        position: "absolute",
                        background: "lightblue",
                      }}
                      className="me-5"
                    >
                      Pending
                    </p>

                    <h5 className="mb-4" value={user.name}>
                      {item.org_name}
                    </h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <span
                            className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0"
                            name="niche"
                          >
                            Niche:
                          </span>
                          <span>
                            <input type="text" placeholder={item.niche} />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                            Region:
                          </span>
                          <span>
                            <input
                              type="text"
                              name="region"
                              placeholder={item.region}
                              value={user.region}
                              />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-5">
                          <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                            Reply Phone:
                          </span>
                          <span className="bg-light-blue">
                            {item.reply_phone}
                          </span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                            Reply Email:
                          </span>
                          <span className="bg-light-gray" name="email">
                            {item.reply_email}
                          </span>
                        </div>
                        <div className="mb-3">
                          <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                            Referral method:
                          </span>
                          <span className="bg-light-blue" name="">
                            {item.referral_method}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                        social media
                      </span>
                      <span className="bg-light-blue">{item.social_media}</span>
                    </div>
                    <hr />
                    {/* Render other details based on your data structure */}
                    <button
                      className="btn btn-success"
                      onClick={() => handleAcceptRequest(item.name)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleRejectRequest(item.id)}
                    >
                      Reject Request
                    </button>
                    <button className="btn btn-primary">Edit</button>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestCard;
