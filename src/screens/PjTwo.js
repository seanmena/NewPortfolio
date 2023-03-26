import React from "react";
// eslint-disable-next-line
import { Button, ButtonReact } from "../components/Button";
import "./PjTwo.css";

export default function PjTwo() {
  return (
    <div className="p2-div">
      <h1 className="head">Book Tracking App</h1>
      <div className="links">
        <ButtonReact> Repository</ButtonReact>
        <ButtonReact> Live Demo</ButtonReact>
      </div>

      <div className="what-issue">
        <h1 className="what-head">Tech Used:</h1>
        <p className="what-text">
          React, CSS, and JavaScript were the main technologies. FRONT-END:
          React, HTML, CSS, JavaScript BACK-END: Firebase, Axios, Google Books
          API
          <br></br>
          APPLICATIONS: VsCode, Adobe Illustrator, Adobe Photoshop
        </p>
      </div>

      <div className="issue">
        <h1 className="issue-text">App Overview:</h1>
        <p className="prob-text">
          A book-tracking application. Users create or log in to an account.
          Each user has a “My Books”, and a “Search” tab. Users may search for
          their favorite books, and save them to their “My Books” page.
        </p>
      </div>

      <div className="solution-div">
        <h1 className="sol-head">The Process</h1>
        <p className="sol-text">
          I designed in Figma and used React and CSS to create the UI. I used
          Axios to fetch the data from the Google Books API on the “Search” page
          of the website. Firebase was used for the database and auth system.
        </p>
      </div>

      <div className="chal-div">
        <h1 className="sol-head">Challenges</h1>
        <p className="sol-text">
          Pulling data using a third party API, and storing it in my own
          database was definitely a challenge. I learned a lot about how to move
          data fluidly through multiple points from this project.
        </p>
      </div>

      <div className="img">
        <img
          className="img-1"
          alt="Kipper Website"
          src={process.env.PUBLIC_URL + "/img/bookclubshots.png"}
        />
      </div>
    </div>
  );
}
