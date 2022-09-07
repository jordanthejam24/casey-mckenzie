import React from "react";
import "../styles/moving-status.css";

export const movingStatus = [
  "First Time Buyer",
  "Up-Sizing",
  "Down-Sizing",
  "Commercial",
  "Cross-Border"
]

export function MovingStatus() {
  return (
    <div className="moving-status">
      <h3 className="title">What's Your Status?</h3>
      <div className="status-container">
        <div className="status-box" onClick={() => {}}>
          <p className="text status-text">First Time Buyer</p>
        </div>
        <div className="status-box">
          <p className="text status-text">Up-Sizing</p>
        </div>
        <div className="status-box">
          <p className="text status-text">Down-Sizing</p>
        </div>
        <div className="status-box">
          <p className="text status-text">Commercial</p>
        </div>
        <div className="status-box">
          <p className="text status-text">Cross-Border</p>
        </div>
      </div>
    </div>
  )
}
