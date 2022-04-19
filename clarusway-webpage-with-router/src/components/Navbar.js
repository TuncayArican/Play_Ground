import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
        <h1><span>Clarusway</span> Web Design</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>
    </div>
  )
}

export default Navbar