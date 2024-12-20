import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 > <Link to="/" className="navbar-logo"> Zully's Website</Link></h1>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/biography" className="navbar-link">Biography</Link>
          </li>
          <li>
            <Link to="/portfolio" className="navbar-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li>
            <Link to="/resume" className="navbar-link">View CV</Link>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + "/Zully_Maya_CV.pdf"} download="Zully_CV.pdf" className="resume-link">
              Download My Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
