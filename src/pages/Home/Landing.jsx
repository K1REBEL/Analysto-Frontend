
import React from "react";
import NavbarLanding from "../../components/Navbar Landing/NavbarLanding";
import AnalystoDescription from "../../components/AnalystoDescription/AnalystoDescription";
import About from "../../components/About/About";
import Request from "../../pages/Auth/Request";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";



function Landing() {
  return (
    <div>
      <NavbarLanding />
      <AnalystoDescription />
      <About />
      <Request />
      <Contacts />
      <Footer />
    </div>
  );
}



export default Landing;
