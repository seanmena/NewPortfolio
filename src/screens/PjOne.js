import React from "react";
// eslint-disable-next-line
import {
  // Button,
  ButtonKipper,
  ButtonKipper2,
  ButtonKipper3,
} from "../components/Button";
import "./PjOne.css";

export default function PjOne() {
  return (
    <div className="p1-div">
      <h1 className="head">Full-Stack Fly Fish Website</h1>
      <div className="links">
        <ButtonKipper> Repository </ButtonKipper>
        <ButtonKipper2> Website </ButtonKipper2>
        <ButtonKipper3> Demo Video </ButtonKipper3>
      </div>

      <div className="what-issue">
        <h1 className="what-head">Tech Used:</h1>
        <p className="what-text">
          React, Firebase, Javascript, and CSS were used as the main
          technologies.
          <br></br>
          FRONT-END: React, HTML, CSS, JavaScript
          <br></br>
          BACK-END: Firebase
          <br></br>
          Applications: VsCode, Figma, Adobe Illustrator, and Adobe Photoshop
        </p>
      </div>

      <div className="issue">
        <h1 className="issue-text">App Overview:</h1>
        <p className="prob-text">
          A fly fish website for a fishing guide. The Admin may add and delete
          blog posts, add and delete images to their gallery, and view/delete
          submitted contact forms.
        </p>
      </div>

      <div className="solution-div">
        <h1 className="sol-head">The Process</h1>
        <p className="sol-text">
          I designed multiple prototypes in Figma. The client chose their
          favorite one. I built the UI with React and CSS. I used Firebase for
          the Database, and authentication system.
        </p>
      </div>

      <div className="chal-div">
        <h1 className="sol-head">Challenges</h1>
        <p className="sol-text">
          The auth system was definitely the biggest challenge for me. Using
          protected routes, and rendering elements based on authorization status
          took a lot of research. I learned a lot about auth, routing, and CRUD
          from this project.
        </p>
      </div>

      <div className="img">
        <img
          className="img-1"
          alt="Kipper Website"
          src={process.env.PUBLIC_URL + "/img/sleepyshots.png"}
        />
      </div>
    </div>
  );
}
