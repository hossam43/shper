import React from "react";
import "./Header.css";
import logo from "../../public/sphere.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <ul className="list-items">
        <li className="item">Home</li>
        <li className="item">Back</li>
        <li className="item">Project Details</li>
      </ul>
    </div>
  );
};

export default Header;
