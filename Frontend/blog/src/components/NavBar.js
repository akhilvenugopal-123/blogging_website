import React from 'react';
import { Link } from 'react-router-dom';
import './StyleNav.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="blog-name">
        <h1> Blog Name</h1>
      </div>
      <div className="nav-options">
        <Link to="/tech">Tech</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/food">Food</Link>
      </div>
    </nav>
  );
}

export default NavBar;
