import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__logo'>
        <Link to='/'>CryptoPal</Link>
        </div>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
        <Link to='/Page-Signup' className='button button--secondary'>Sign Up</Link> {/* Link to the sign-up page */}
      </div>
    </header>
  );
}

export default Header;
