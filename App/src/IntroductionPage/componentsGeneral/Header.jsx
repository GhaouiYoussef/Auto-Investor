import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header-section clearfix">
      <div className="container-fluid">
        <Link to="/" className="site-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="responsive-bar"><i className="fa fa-bars"></i></div>
        <Link to="" className="user"><i className="fa fa-user"></i></Link>
        <Link to='/Page-Signup' className='site-btn'>Sign Up For Free</Link>
        <nav className="main-menu">
          <ul className="menu-list">
            <li>
              <ScrollLink to='hero' smooth={true} duration={100} offset={-window.innerHeight / 3}>Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={100} offset={-window.innerHeight / 3}>About Us</ScrollLink>
            </li>
            <li><Link to='/OurServices'>Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/currency">Currency</Link></li>
            <li>
              <ScrollLink to="team" smooth={true} duration={100} offset={-window.innerHeight / 3}>Team</ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
