import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

import "./Herosection.scss";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div>
        <p className="kennel">Kennel</p>
        <h1>Laverdaboom</h1>
        <p>En liten kennel som föder upp taxar i familjemiljö</p>
      </div>
    </div>
  );
};

export default HeroSection;
