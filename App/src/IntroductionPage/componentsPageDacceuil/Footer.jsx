import React from 'react';
import logo from './img/logo.png';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row spad">
          <div className="col-md-6 col-lg-3 footer-widget">
            <img src={logo} className="mb-4" alt="Logo" />
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p>
            <span>
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with 
              <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </span>
          </div>
          <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
            <h5 className="widget-title">Resources</h5>
            <ul>
              <li><a href="#">How to Buy Coin</a></li>
              <li><a href="#">Coin Overview</a></li>
              <li><a href="#">Blog News</a></li>
              <li><a href="#">How to Sell Coin</a></li>
              <li><a href="#">Purchase Theme</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
            <h5 className="widget-title">Quick Links</h5>
            <ul>
              <li><a href="#">Network Stats</a></li>
              <li><a href="#">Block Explorers</a></li>
              <li><a href="#">Governance</a></li>
              <li><a href="#">Exchange Markets</a></li>
              <li><a href="#">Get Theme</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2 footer-widget">
            <h5 className="widget-title">Support</h5>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Help Desk</a></li>
              <li><a href="#">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
