import React, { useState, useEffect } from 'react';

function RequestCard({ org }) {
    const [accepted, setAccepted] = useState(false);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (org) {
            setFormData(org);
        }
    }, [org]);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleAccept = () => {
        setAccepted(true);
        setEditing(false);
    };

    const handleReject = () => {
        setAccepted(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="requests d-flex justify-content-evenly align-items-center flex-column p-5 m-5">
            <div id="card" className={`pending-card card col-md-12 p-2 ${accepted ? 'accepted' : ''}`}>
                {/* Your card content */}
                {editing ? (
                    // Render input fields for editing
                    <div className="editing">
                        {/* Render input fields for editing */}
                        {/* Example: */}
                        <input type="text" name="org_name" value={formData.org_name || ''} onChange={handleChange} />
                        {/* Add similar input fields for other data */}
                    </div>
                ) : (
                    // Render data values
                    <div className="data">
                        <div className="data-value p-2">Name: {formData.org_name || ''}</div>
                        {/* Render other data values */}
                    </div>
                )}
                {/* Buttons */}
                {!accepted && (
                    <div className="buttons">
                        {!editing ? (
                            <button className="edit-button" onClick={handleEdit}>Edit & Accept</button>
                        ) : (
                            <button className="accept-button" onClick={handleAccept}>Accept</button>
                        )}
                        <button className="reject-button" onClick={handleReject}>Reject the Request</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RequestCard;
