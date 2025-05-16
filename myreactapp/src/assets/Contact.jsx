// assets/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <>
    <div>
      <a id= "contact_title">Contact Details:</a>
      <div className="contact">
          <p>Personal Email: prabinacharya922@gmail.com</p>
          <p>School Email: pacha3@uic.edu</p>
          <p>Phone: 872-235-6609</p>
      </div>
      
      <hr></hr>
    </div>
    
    <div className="footer">
        <a href="https://github.com/Pravinacharya922">
          <img id="logo" src="src/assets/gitlogo.jpg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/acharya-pravin/">
          <img id="logo" src="src/assets/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://app.joinhandshake.com/profiles/srzh5v">
          <img id="logo" src="src/assets/handshake.png" alt="Handshake" />
        </a>
      </div>
      <hr></hr>




    </>
  
  );
}

export default Contact;
