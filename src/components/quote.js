import React from "react";
import "../styles/quote.css";

export function Quote() {
  return (
    <div className="quote">
      <div className="quote-pic-container">
        <img src={require("../assets/casey-walker.jpg")} alt="person" className="quote-img"/>
      </div>
      <div className="quote-container">
        <h3 className="quote-title">Casey is the most beautiful woman in the whole world. She'll never ever need makeup ever.</h3>
        <p className="quote-text">-Her Husband</p>
      </div>
    </div>
  )
}