// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">R.</div>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
