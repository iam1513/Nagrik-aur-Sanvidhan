import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src={logoImage}
            alt="Logo"
            style={{
              height: "30px",
              width: "auto",
              marginRight: "8px",
            }}
          />
          <span style={{ color: "#FB9250" }}>Citizen</span> & &nbsp;
          <span style={{ color: "#89D43D" }}>Constitution</span>
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/learnDup">Learn</Link>
        </li>
        <li className="nav-item">
          <Link to="/play">Play</Link>
        </li>
        <li className="nav-item">
          <Link to="/debate">Debate</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        {/* Change the Login link to a button */}
        <li className="nav-item nav-login">
          <Link to="/login" className="login-button">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
