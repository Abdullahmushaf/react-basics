import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
