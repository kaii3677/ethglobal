import React from "react";
import { Link, useLocation } from "react-router-dom";  // Import useLocation
import logo from "../../assets/logo.png";  // Import logo
import './navbar.css';

const Navbar = () => {
  const location = useLocation();  // Get the current location

  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="main-nav-links">
        <Link
          to="/mainpage"
          className={location.pathname === "/mainpage" ? "active-link" : ""}
        >
          Home
        </Link>
        <Link
          to="/donation"
          className={location.pathname === "/donation" ? "active-link" : ""}
        >
          Donation
        </Link>
        <Link
          to="/financial"
          className={location.pathname === "/financial" ? "active-link" : ""}
        >
          Financial Aids
        </Link>
        <Link
          to="/vote"
          className={location.pathname === "/vote" ? "active-link" : ""}
        >
          Voting
        </Link>
      </div>

      <div className="wallet">
        <p>ur wallet address</p>
      </div>
    </nav>
  );
};

export default Navbar;
