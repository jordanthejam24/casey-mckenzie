import React from "react";
import "../styles/contact-form.css";

export function ContactForm() {
  return (
    <div className="contact-form-container">
      <p className="title">Contact Me!</p>
      <form 
        className="contact-form" 
        action="https://formsubmit.co/8a54a26df7594e4778197f4211952255" 
        method="POST"
      >
        {/* honeypot */}
        <input type="text" name="_honey" style={{display: 'none'}} />
        {/* captcha */}
        <input type="hidden" name="_captcha" value="false" />
        
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        
        <div className="contact-form-box">
          <label for="firstName" className="form-label">First Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="firstName" 
            name="name"
            required 
          />
        </div>
        <div className="contact-form-box">
          <label for="lastName" className="form-label">Last Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="lastName" 
            name="last name"
            required 
          />
        </div>
        <div className="contact-form-box">
          <label for="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            required 
          />
        </div>
        <div className="contact-form-box">
          <label for="questions" className="form-label">Comments/Questions?</label>
          <input 
            type="text" 
            className="form-control" 
            id="questions" 
            name="comments/questions"
          />
        </div>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  )
}