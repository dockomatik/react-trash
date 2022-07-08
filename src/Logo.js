import React from "react";
import logo from "./logo-picture.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <h1 className="logo">
        HM<br></br>Services
      </h1>
      <img className="logo-picture" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
