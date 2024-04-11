import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './perfectlogo-transparent.png';


import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header-section clearfix">
      <div className="container-fluid">
        <a href="index.html" className="site-logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="responsive-bar"><i className="fa fa-bars"></i></div>
        <a href="" className="user"><i className="fa fa-user"></i></a>
        <Link to='/Page-Signup' className='site-btn'>Sign Up For Free</Link>
        <nav className="main-menu">
          <ul className="menu-list">
          <li> <Link to='/'>Home </Link></li>
            
            <li><Link to='/AboutUs'> About Us</Link></li>

            <li><Link to='/OurServices' >Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/currency">Currency</Link></li>
              <li><Link to="/team">Team</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

