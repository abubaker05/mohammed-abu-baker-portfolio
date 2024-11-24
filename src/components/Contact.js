import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">Feel free to reach out to me through any of the following ways:</p>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:22ve1a05n5_abubaker@gmail.com">22ve1a05n5_abubaker@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+91 7032339991">+91 7032339991</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/mohammed-abubaker-22b73421b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <i className="fab fa-github"></i>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
