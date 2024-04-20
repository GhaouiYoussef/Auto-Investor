import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoImage from './perfectlogo-transparent.png';
import logo from './logoooo.png';
import './Header.css';
import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  return (
    <header className='header-section clearfix'>
      <div className="container-fluid">
        {/* Site logo */}
        <a href="" className="site-logo">
          <img src={logo} className='rr' alt="Logo" />
        </a>
        
        {/* Responsive bar */}
        <div className="responsive-bar">
          <i className="fa fa-bars"></i>
        </div>
        
        {/* User icon */}
        <a href="" className="user">
          <i className="fa fa-user"></i>
        </a>
        
        {/* Sign-up button */}
        <Link to="/Page-Signup" className="site-btn">
          Sign Up For Free
        </Link>
        
        {/* Main navigation menu */}
        <nav className="main-menu">
          <ul className="menu-list">
            <li>
              <ScrollLink 
                to="hero" 
                smooth={true} 
                duration={100} 
                offset={-window.innerHeight / 3}
              >
                
                <Link to='/'>Home</Link>

              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={100} 
                offset={-window.innerHeight / 3}
              >
                
                <Link to='/'>About Us</Link>

              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="process" 
                smooth={true} 
                duration={100} 
                offset={-window.innerHeight / 3}
              >
                
                <Link to='/'>Get Started</Link>

              </ScrollLink>
            </li>
            <li>
<ScrollLink 
                to="features" 
                smooth={true} 
                duration={100} 
                offset={-window.innerHeight / 3}
              >
                <Link to='/'>Features</Link>
              </ScrollLink>
            </li>
            <li>
<ScrollLink 
                to="team" 
                smooth={true} 
                duration={100} 
                offset={-window.innerHeight / 10}
              >
                <Link to='/'>Team</Link>
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
