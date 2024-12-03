"use client";
import React from 'react';
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./Navbar.css"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return (
        <nav className="navbar">
        <div className="container">
          <div className="logo">Logo</div>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#">Courses</a>
              <div className="icon-drop"><RiArrowDropDownLine /></div>
            </li>
            <li>
              <a href="#">Instructors</a>
              <div className="icon-drop"><RiArrowDropDownLine /></div>
            </li>
            <li>
              <a href="#">Blogs</a>
              <div className="icon-drop"><RiArrowDropDownLine /></div>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className='side-links'>
          <li className="icon">
              <a href="#">
                <span role="img" aria-label="cart">
                <CiShoppingCart />
                </span>
              </a>
            </li>
            <li>
              <button className="login-btn">Login</button>
            </li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;