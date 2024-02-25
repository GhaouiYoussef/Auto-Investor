import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/">Auto Investor</a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                <a href="/#why">Why Auto Investor</a>
              </li>
              <li>
                <a href="/#how-it-works">How it Works</a>
              </li>
              <li>
                <a href="/#pricing">Pricing</a>
              </li>
              <li>
                <a href="/#resources" className="button button--secondary">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;