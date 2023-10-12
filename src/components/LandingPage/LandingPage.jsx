import React from "react";
import "./LandingPage.scss";
import Navbar from "../Navbar/Navbar";
import car from "@/assets/images/car1.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="Landing_page">
      <Navbar />
      <div className="hero_section container">HomePage</div>
    </div>
  );
};

export default LandingPage;
