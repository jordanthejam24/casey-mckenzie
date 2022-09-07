import * as React from "react";
import "../styles/style.css";

export function Logo({logoType}) {
  
  return (
    <img 
      className="logo" 
      src={logoType ? require("../assets/cm-logo.png") : require("../assets/vor-logo.png")} 
      alt={logoType ? "Casey McKenzie Logo" : "VORSellsHomes Logo"} 
    />
  )
}
