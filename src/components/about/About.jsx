import React from 'react'
import "./About.scss";
import logopic from "../../img/logopic.png";

function About() {
  return (
    <div>
        <section id="about" class="about">
      <div class="containerr">

        <div class="row">
          <div class="col-lg-6">
            <img src={logopic} class="img-fluidd" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Analysto team</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

      </div>
    </section>

    </div>
  )
}

export default About