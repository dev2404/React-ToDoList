import React from "react";
import logo from "./Images/logo1.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" height="50" width="70" />
      <h1>DevNotes</h1>
    </div>
  );
}

export default Header;
