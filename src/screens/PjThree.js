import React from "react";
// eslint-disable-next-line
import { Button, ButtonEmg, ButtonEmg2 } from "../components/Button";
import "./PjThree.css";

export default function PjThree() {
  return (
    <div className="p3-div">
      <h1 className="head">Front-end Mentor Code Challenge</h1>
      <div className="links">
        <ButtonEmg> Repository</ButtonEmg>
        <ButtonEmg2> Live Demo</ButtonEmg2>
      </div>

      <div className="what-issue">
        <h1 className="what-head">Tech Used:</h1>
        <p className="what-text">React & CSS.</p>
      </div>

      <div className="issue">
        <h1 className="issue-text">App Overview:</h1>
        <p className="prob-text">
          Front end mentor gave me the prototype and assets to create a pixel
          perfect version of their News Page. It doesn't have any real function
          other than being a landing page with animations.
        </p>
      </div>

      <div className="solution-div">
        <h1 className="sol-head">The Process</h1>
        <p className="sol-text">
          I used React and CSS to create this project. I created a grid and told
          the components where they needed to go. I also used flexbox to create
          the navbar. I used Adobe software to find the exact colors and
          recreated it as it was given to me.
        </p>
      </div>

      <div className="chal-div">
        <h1 className="sol-head">Challenges</h1>
        <p className="sol-text">
          Creating a complex design without using any CSS frameworks was a
          challenge. I've used bootstrap a lot and I hadn't jumped fully into
          vanilla CSS grid before this project. I learned a lot about CSS and
          how to build a responsive website from this project.
        </p>
      </div>

      <div className="img">
        <img
          className="img-1"
          alt="Kipper Website"
          src={process.env.PUBLIC_URL + "/img/newsshots.png"}
        />
      </div>
    </div>
  );
}
