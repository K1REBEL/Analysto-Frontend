import React from 'react';
import "./About.scss";

function About() {
  return (
    <div
    id="About"
    className="about-section d-flex align-items-center justify-content-center mx-3 p-4 container-fluid"
  >
    <div className="col-md-8 card-two">
      <div className="about-us-image"></div>
    </div>
    <div className="about-us-description col-md-4 p-2 text-center">
      <h1 classNameName='text-center'>About Us</h1>
      <p className="about-us-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi
        aliquid nesciunt numquam deserunt commodi cupiditate quibusdam, rem
        saepe, aspernatur quae iste tempora voluptas sint nam voluptatum
        provident nisi. Eum repudiandae nostrum eveniet quia debitis non
        praesentium suscipit nam maxime ipsam, vitae sequi alias? Laboriosam,
        maxime libero esse fugit animi architecto autem fugiat vitae eligendi
        vel exercitationem perferendis iste incidunt aut excepturi assumenda,
      </p>
    </div>
  </div>
  );
}

export default About;