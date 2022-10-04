import React from "react";
import "./Logo.css";
import logo from "../../brand-logo.png";

const Logo = () => {
  return (
    <div className="logo-div">
      <img src={logo} />
      <h3>Eden</h3>
    </div>
  );
};

export default Logo;
