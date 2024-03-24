import React, { useEffect, useState } from "react";
// import axios from 'axios';
import "./GetRequest.scss";

function RequestCard() {
  // const [orgreq, setOrgreq] = useState([]);
  // const [userToken, setUserToken] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchedToken = localStorage.getItem('userToken');
  //       setUserToken(fetchedToken);

  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${fetchedToken}`,
  //         },
  //       };

  //       const { data } = await axios.get(
  //         'http://127.0.0.1:4000/api/admin/requests',
  //         config
  //       );

  //       setOrgreq(data.result);
  //       console.log(data.result);
  //     } catch (error) {
  //       console.error('Error fetching requests:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="requests d-flex justify-content-evenly align-items-center flex-column p-5 m-5">
      <div className="container">
        <div className="container">
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
                    classNameName="me-5"
                  >
                    Pending
                  </p>

                  <h5 className="mb-4">Amazon USA</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Niche:
                        </span>
                        <span>
                          <input type="text" placeholder="e-commerce" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Region:
                        </span>
                        <span>
                          <input type="text" placeholder="egypt" />
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
                        <span className="bg-light-blue">123-563-789</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                          Reply Email:
                        </span>
                        <span className="bg-light-gray">
                          eng.gamalsobhi@gmail.com
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                          Referral method:
                        </span>
                        <span className="bg-light-blue">Social Media</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                      social media
                    </span>
                    <span className="bg-light-blue">
                      https://www.facebook.com/profile.php?id=100001546971200
                    </span>
                  </div>
                  <button className="btn btn-success">Accept</button>
                  <button className="btn btn-success">Reject Request</button>
                  <button className="btn btn-primary">Edit</button>
                </div>
                <hr />
              </div>

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
                    classNameName="me-5"
                  >
                    Pending
                  </p>

                  <h5 className="mb-4">Amazon USA</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Niche:
                        </span>
                        <span className="bg-light-blue">ecommerce</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Region:
                        </span>
                        <span className="bg-light-blue">Egypt</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-5">
                        <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                          Reply Phone:
                        </span>
                        <span className="bg-light-blue">123-563-789</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                          Reply Email:
                        </span>
                        <span className="bg-light-gray">
                          eng.gamalsobhi@gmail.com
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
                          Referral method:
                        </span>
                        <span className="bg-light-blue">Social Media</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                      social media
                    </span>
                    <span className="bg-light-blue">
                      https://www.facebook.com/profile.php?id=100001546971200
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
