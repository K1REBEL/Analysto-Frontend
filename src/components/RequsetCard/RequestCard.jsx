import  {React, useEffect, useState }  from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function RequestCard() {

  const [orgreq, setOrgreq] = useState([]);
  const [userToken, setUserToken] = useState("");


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
            console.log(data.result)
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        }
    
        fetchData();
      }, []);
    return (
        <div className="requests d-flex justify-content-evenly align-items-center flex-column p-5 m-5">
            <div id="card" className="pending-card card col-md-12 p-2">
                <div className="d-flex gap-4 p-3 flex-row">
                    <div className="column1 col-md-5 p-2">
                        <div className="data d-flex p-2">
                            <div className="d-flex justify-content-end">
                                <div className="data-name p-2">Name:</div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="data-value p-2">Amazon USA</div>
                            </div>
                        </div>
                        <div className="data d-flex p-2">
                            <div className="d-flex justify-content-end">
                                <div className="data-name p-2">Niche:</div>
                                <div className="data-value p-2 niche">ecommerce</div>
                            </div>
                            <div className="d-flex justify-content-start">
                            </div>
                        </div>
                        <div className="data d-flex p-2">
                            <div className="d-flex justify-content-end">
                                <div className="data-name p-2">Region:</div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="data-value p-2">Egypt</div>
                            </div>
                        </div>
                    </div>
                    <div className="column2 col-md-5 p-2">
                        <div className="data d-flex p-2">
                            <div className="d-flex justify-content-end">
                                <div className="data-name p-2">Reply Phone:</div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="data-value p-2 phone">+201211085189</div>
                            </div>
                        </div>
                        <div className="data d-flex p-2">
                            <div className="d-flex justify-content-end">
                                <div className="data-name p-2">Reply Email:</div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="data-value p-2">eng.gamalsobhi@gmail.com</div>
                            </div>
                        </div>
                        <div className="data d-flex p-2">
                            <div className="d-flex justify-content-end">
                                <div className="data-name p-2">Referral method:</div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="data-value p-2 method">Social Media</div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-to-right d-block">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-success">Edit</button>
                        <button className="btn btn-primary">Reject</button>
                      </div>
                    

                    <div className="column3 col-md-2 d-flex p-2 justify-content-start align-items-end flex-column gap-5">
                        <div style={{ alignSelf: 'end' }} className="me-5">
                            <button id="edit-button" className="ms-1 edit-button">Edit & Accept</button>
                            <br />
                            <br />
                            <button className="ms-1 reject-button bg-danger">Reject the Request</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 p-2">
                    <div className="data d-flex p-2">
                        <div className="data-name p-2">Social Media:</div>
                        <div className="data-value p-2">https://www.facebook.com/profile.php?id=100001546971200</div>
                    </div>
                </div>
                <p id="pending-word" style={{ position: 'absolute', right: '1%', bottom: '3%', color: '#3B71CA' }} className="me-5">
                    Pending
                </p>
            </div>
        </div>
    );
}

export default RequestCard;