import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export const Button = ({ children, type, onClick }) => {
  return (
    <Link to={{ pathname: "https://github.com/seanmena" }} target="_blank">
      <button className={`btn1`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonTwo = ({ children, type, onClick }) => {
  return (
    <Link
      to={{ pathname: "https://www.linkedin.com/in/sean-mena-2910651aa/" }}
      target="_blank"
    >
      <button className={`btn2`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonKipper = ({ children, type, onClick }) => {
  return (
    <Link
      to={{ pathname: "https://github.com/seanmena/sleepyangler" }}
      target="_blank"
    >
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonKipper2 = ({ children, type, onClick }) => {
  return (
    <Link to={{ pathname: "https://sleepyangler.com/" }} target="_blank">
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonKipper3 = ({ children, type, onClick }) => {
  return (
    <Link
      to={{ pathname: "https://www.youtube.com/watch?v=uIvjJZ4A66c&t=29s" }}
      target="_blank"
    >
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonReact = ({ children, type, onClick }) => {
  return (
    <Link
      to={{ pathname: "https://github.com/seanmena/myportfolio" }}
      target="_blank"
    >
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};
export const ButtonReact2 = ({ children, type, onClick }) => {
  return (
    <Link to={"/home"} target="_blank">
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonEmg = ({ children, type, onClick }) => {
  return (
    <Link
      to={{
        pathname: "https://github.com/MizTangerine/Emotional_Media_Generator",
      }}
      target="_blank"
    >
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonEmg2 = ({ children, type, onClick }) => {
  return (
    <Link
      to={{
        pathname: "https://miztangerine.github.io/Emotional_Media_Generator/",
      }}
      target="_blank"
    >
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonEmpMan = ({ children, type, onClick }) => {
  return (
    <Link
      to={{ pathname: "https://github.com/seanmena/EmployeeManager" }}
      target="_blank"
    >
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export const ButtonEmpMan2 = ({ children, type, onClick }) => {
  return (
    <Link
      to={{ pathname: "https://www.youtube.com/watch?v=CoCmhje6Lmw" }}
      target="_blank"
    >
      <button className={`btn3`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
