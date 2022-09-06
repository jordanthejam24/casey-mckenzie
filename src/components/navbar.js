import * as React from "react";
import { Logo } from "../components/logo";
import "./navbar.css";
import "../assets/cm-logo.png";
import "../assets/vor-logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/">
        <Logo logoType={true} />
      </a>
      <div className="navbar-links">
        <a href="/" className="nav-link">
          about
        </a>
        <a href="/" className="nav-link">
          Testimonials
        </a>
        <a href="/" className="nav-link">
          discover
        </a>
        <a href="/" className="nav-link">
          contact
        </a>
      </div>
    </div>
  )
}

export default Navbar