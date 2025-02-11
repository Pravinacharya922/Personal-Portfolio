// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Home() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>  {/* Link to Home Page */}
        <Link to="/contact">Contact</Link>  {/* Link to Contact Page */}
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>

      <div className="image">
        <img src="src/assets/profileimg.jpeg" alt="Profile" />
      </div>

      <h1 id="name">Pravin Acharya</h1>
      <hr />

      <div>
        <p className="front_details">
          Pravin Acharya, Seeking Software Engineer Internship, Senior, Computer Science at University of Illinois Chicago.......
        </p>
        <hr />
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
    </>
  );
}

export default Home;
