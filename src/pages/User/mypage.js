import React from "react";
import Card from "./card";

const MyPage = () => {
  return (
    <div className="card-container">
      <Card
        imageSrc="My-Password.png"
        details="ygdiaygsdmyasdtafjdf,dygfdghdggfduafdasgd
        askhgkashdgjahgdjhdsgfc
        sddjhsdcjhsdvcjhsdvjsc"
      />
      <Card
        imageSrc="My-Password.png"
        details="Details for image 2"
      />
      <Card
        imageSrc="My-Password.png"
        details="Details for image 3"
      />
    </div>
  );
};

export default MyPage;
