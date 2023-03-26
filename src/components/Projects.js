import React from "react";
import { Link } from "react-router-dom";

export const ProjectOne = ({ children, type, onClick }) => {
  return (
    <Link to={"/projectone"} className="ProjectOne">
      <div className={`ProjectOne`} onClick={onClick} type={type}>
        <h1 className="p1-txt">Sleepy Angler</h1>
        <p className="p1-sub">
          A fly fish guide's website. A full-stack application built with React,
          CSS, and Firebase. It uses CRUD API routing and an auth system. The
          admin can manage a gallery, contact forms, and blog posts.
        </p>
      </div>
    </Link>
  );
};

export const ProjectTwo = ({ children, type, onClick }) => {
  return (
    <Link to={"/projecttwo"} className="ProjectTwo">
      <div className={`ProjectTwo`} onClick={onClick}>
        <h1 className="p2-txt">Book Club App</h1>
        <p className="p2-sub">
          A book tracking website. It is a full-stack application using React,
          AXIOS, CSS, and Firebase. It has an auth system and uses CRUD and a
          RESTful APi. a RESTful API.
        </p>
      </div>
    </Link>
  );
};

export const ProjectThree = ({ children, type, onClick }) => {
  return (
    <Link to={"/projectthree"} className="ProjectThree">
      <div className={`ProjectThree`} onClick={onClick} type={type}>
        <h1 className="p3-txt">Landing Page</h1>
        <p className="p3-sub">
          A simple, elegant landing page. Built with React and CSS, this was a
          front-end mentor challenge. I was provided the assets and prototype to
          reacreate.
        </p>
      </div>
    </Link>
  );
};

export const ProjectFour = ({ children, type, onClick }) => {
  return (
    <Link to={"/projectfour"} className="Projectfour">
      <div className={`Projectfour`} onClick={onClick} type={type}>
        <h1 className="p4-txt">Employee Manager</h1>
        <p className="p4-sub">
          A terminal based tool created with JavaScript, Node.js and the
          Inquirer NPM package. Manipulates MySQL DB data based on user input.
          This is a Back-end program.
        </p>
      </div>
    </Link>
  );
};

export default ProjectOne;
