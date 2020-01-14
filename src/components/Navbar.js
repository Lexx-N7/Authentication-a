import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        Logo
      </a>

      <ul className="navbar-nav d-flex flex-sm-row ">
        <li className="nav-item">
          <Link to="/" className="nav-link mr-5">
            home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link mr-5">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
