import React from "react";
import Footer from "../components/Footer";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="res-div">
      <img
        alt="Resume"
        className="r-img"
        src={process.env.PUBLIC_URL + "/img/Resume.png"}
      ></img>

      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}
