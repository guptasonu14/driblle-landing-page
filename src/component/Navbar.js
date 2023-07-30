import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Your Logo</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add more links for other pages */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
