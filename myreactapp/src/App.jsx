// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/Home.jsx';  // Import Home Component
import Contact from './assets/Contact.jsx';  // Import Contact Component
import About from './assets/About.jsx';
import Projects from './assets/Projects.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route to Home Page */}
        <Route path="/Contact" element={<Contact />} />  {/* Route to Contact Page */}
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />

      </Routes>
    </Router>
  );
}

export default App;
