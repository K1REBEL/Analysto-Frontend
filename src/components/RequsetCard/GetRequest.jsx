import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./GetRequest.scss";


function RequestCard() {
  const [orgreq, setOrgreq] = useState([]);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedToken = localStorage.getItem('userToken');
        setUserToken(fetchedToken);

        const config = {
          headers: {
            Authorization: `Bearer ${fetchedToken}`,
          },
        };

        const { data } = await axios.get(
          'http://127.0.0.1:4000/api/admin/requests',
          config
        );

        setOrgreq(data.result);
        console.log(data.result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="requests d-flex justify-content-evenly align-items-center flex-column p-5 m-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cardd card-white mb-5">
              <div className="cardd-heading clearfix border-bottom mb-4">
                <h4 className="cardd-title">Booking Requests</h4>
              </div>
              <div className="cardd-body">
                <ul className="list-unstyled">
                  {orgreq.map((request, index) => (
                    <li key={index} className="position-relative booking">
                      <div className="media">
                        <div className="msg-img">
                          <img src={request.imgSrc} alt="" />
                        </div>
                        <div className="media-body">
                          <h5 className="mb-4">{request.name} <span className={`badge badge-${request.status === 'Pending' ? 'primary' : request.status === 'Approved' ? 'success' : 'danger'} mx-3`}>{request.status}</span></h5>
                          <div className="mb-3">
                            <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                            <span className={`bg-light-${request.status === 'Approved' ? 'green' : 'blue'}`}>{request.bookingDate}</span>
                          </div>
                          <div className="mb-3">
                            <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Details:</span>
                            <span className={`bg-light-${request.status === 'Approved' ? 'green' : 'blue'}`}>{request.bookingDetails}</span>
                          </div>
                          <div className="mb-5">
                            <span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">Clients:</span>
                            <span className="border-right pr-2 mr-2">{request.clientName}</span>
                            <span className="border-right pr-2 mr-2"> {request.clientEmail}</span>
                            <span>{request.clientPhone}</span>
                          </div>
                          <a href="#" className="btn-gray">Send Message</a>
                        </div>
                      </div>
                      <div className="buttons-to-right">
                        {request.status === 'Pending' && (
                          <>
                            <a href="#" className="btn-gray mr-2"><i className="far fa-times-circle mr-2"></i> Reject</a>
                            <a href="#" className="btn-gray"><i className="far fa-check-circle mr-2"></i> Approve</a>
                          </>
                        )}
                        {request.status === 'Approved' && (
                          <a href="#" className="btn-gray mr-2"><i className="far fa-times-circle mr-2"></i> Cancel</a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
