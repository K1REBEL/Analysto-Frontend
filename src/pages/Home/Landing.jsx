
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Request from "../../pages/Auth/Request";
// import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";



function Landing() {
  return (
    <div>
      <Navbar />
     
      <div>
      <Header />
      </div>
      <div>
      <Request />
      </div>

      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}



export default Landing;
