import React from "react";
import "../styles/style.css";

export function Landing() {
  return (
    <div className="landing">
      <video autoPlay muted loop className="landing-video">
        <source src={require("../assets/clouds-gif.mp4")} type="video/mp4" />
        Your Browser does not support HTML5 Video
      </video>
      <div className="landing-content">
        <img 
          className="logo-vors" 
          src={require("../assets/vor-logo.png")} 
          alt="VORSellshomes Logo"
        />
      </div>
    </div>
  )
}