
// Contact.js
import React from 'react';

function Contact() {
  return (
<section id="contact">
  <h2>Contact Me</h2>
  <div className="contact-box">
    <div className="social-links">
      <i className="fa fa-envelope"></i>
      <a href="mailto:baidyaarunit@gmail.com">baidyaarunit@gmail.com</a>
    </div>
    <div className="social-links">
      <i className="fa fa-envelope"></i>
      <a href="mailto:baidya.ar@northeastern.edu">baidya.ar@northeastern.edu</a>
    </div>
    <div className="social-links">
      <i className="fa fa-phone"></i>
      <a href="tel:+16179355115">+1 (617) 935-5115</a>
    </div>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/arunit-baidya-388295174/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>LinkedIn
      </a>
    </div>
    <div className="social-links">
      <a href="https://github.com/AR-UNIT" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>Github
      </a>
    </div>
  </div>
</section>

  );
}

export default Contact;