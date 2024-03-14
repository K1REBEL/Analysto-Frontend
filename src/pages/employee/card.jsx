import React from 'react';
import "./card.css"
import Navbar from "../../components/Navbar/Navbar";
// import Sidebar from '../../components/Sidebar/Sidebar';
import img1 from '../../img/samsung.svg';
import img2 from '../../img/logo-sharp.svg';
import img3 from '../../img/cdnlogo.com_zanussi.svg';
import img4 from '../../img/beko-2.svg';
import img5 from '../../img/bosch.svg';
import img6 from '../../img/logo-lg.svg';

function CardLayout() {
  return (
    <div>
      <Navbar/>
    <main>
      {/* <Sidebar/> */}
      <section className="cards">
        <Card
          imageUrl={img1}
          title="Here's the Title of an Awesome Course"
        />
        <Card
          imageUrl={img2}
          title="Here's the Title of an Awesome Course"
        />
        <Card
          imageUrl={img3}
          title="Here's the Title of an Awesome Course"
        />
        <Card
          imageUrl={img4}
          title="Here's the Title of an Awesome Course"
        />
        <Card
          imageUrl={img5}
          title="Here's the Title of an Awesome Course"
        />
        <Card
          imageUrl={img6}
          title="Here's the Title of an Awesome Course"
        />
      </section>
    </main>
    </div>
  );
}

function Card({ imageUrl, title}) {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card__content">
        <p className="card__title text--medium">{title}</p>
        <div className="card__info">
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
