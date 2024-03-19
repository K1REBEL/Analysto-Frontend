import React from "react";
import NavBarRequest from "../../components/NavBarRequestAdmin/NavBarRequest";
import RequestCard from "../../components/RequsetCard/RequestCard";
import "./RequestAdmin.scss"

function RequestAdmin() {
  return (
    <div>
      <NavBarRequest />
      <RequestCard />
    </div>
  );
}



export default RequestAdmin;
