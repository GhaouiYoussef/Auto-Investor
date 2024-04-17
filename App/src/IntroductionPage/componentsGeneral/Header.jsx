import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoImage from './perfectlogo-transparent.png';
import logo from './logoooo.png';
import './Header.css';
import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  // Initialize state to track whether the header should be sticky
  const [isSticky, setIsSticky] = useState(true);

  // Get the current URL path using useLocation hook
  const location = useLocation();

  // Define a useEffect to conditionally apply the sticky class based on the current path
  useEffect(() => {
    // Check if the current path is not /Signup or /Login
    if (location.pathname === '/Signup' || location.pathname === '/Login') {
      setIsSticky(false); // Do not apply sticky class
    } else {
      setIsSticky(true); // Apply sticky class
    }
  }, [location.pathname]); // Re-run the effect when the location changes

  // Define the className for the header based on the state of isSticky
  const headerClassName = isSticky ? 'header-section clearfix sticky' : 'header-section clearfix';

  return (
    <header className={headerClassName}>
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

