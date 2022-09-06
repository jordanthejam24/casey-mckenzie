import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Logo } from "../components/logo";
import "../styles/navbar.css";
import "../assets/cm-logo.png";
import "../assets/vor-logo.png";

function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <a href="/">
          <Logo logoType={true} />
        </a>
        <div className="navbar-links">
          <Link to="/" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Testimonials</Link>
          <Link to="/" className="nav-link">Discover</Link>
          <Link to="/" className="nav-link">Contact</Link>
        </div>
      </div>
    </Router>
  )
}

export default Navbar