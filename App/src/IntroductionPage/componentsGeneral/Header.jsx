import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from './perfectlogo-transparent.png';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

function Header() {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__logo'>
          <Link className='Titre' to='/'>
            <img src={logoImage} alt="Crypto-APP Logo" />Crypto-APP
          </Link>
        </div>
        <nav className='header__nav'>
          {/* humbuger */}
          <div class="ham">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <ul className='header__nav-list'>
            <li>
              <Link to='/'>
                <div className="nav-item">
                  <HomeIcon/> <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/AboutUs'>
                <div className="nav-item">
                  <InfoIcon/> <span>About Us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/OurServices'>
                <div className="nav-item">
                  <span>Services</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="nav-item">
                  <ContactMailIcon/> <span>Contact Us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <div className="nav-item">
                  <LiveHelpIcon/> <span>FAQ</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/currency">
                <div className="nav-item">
                   <span>Currency</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/team">
                <div className="nav-item">
                  <span>Team</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='sgnp'>
          <li>
            <Link to='/Page-Signup' className='button button--secondary'>
              <LoginIcon />
              Sign Up
            </Link> {/* Link to the sign-up page */}
          </li>
        </div>
      </div>
    </header>
  );
}

export default Header;
