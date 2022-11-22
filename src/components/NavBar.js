import React from "react";
import "../styles/NavBar.css";
import Logo from "../imagery/SCZlogo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="left-side">
        <img src={Logo} />
      </div>
      <div className="right-side">
        <Link to="/">Our Purpose</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/donate">Donate</Link>
      </div>
    </nav>
  );
}
