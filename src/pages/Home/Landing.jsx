import React from "react";
import Header from "../../components/Header/Header";
import Request from "../../pages/Auth/Request";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";



function Landing() {
  return (
    <div>

      <div>
        <Header />
      </div>
      
      <div>
        <About />
      </div>
      <div>
        <Request />
      </div>

      <Contacts />
      <Footer /> 
      
    </div>
  );
}

export default Landing;
