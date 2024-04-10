import React from 'react';
import laptopImage from './img/laptop.png';
import './HeroSection.css'
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-text">
            <h2>Invest in <span>Bitcoin</span> <br />Bitcoin Trading</h2>
            <h4>Use modern progressive technologies of Bitcoin to earn money</h4>
            <form className="hero-subscribe-from">
              <input type="text" placeholder="Enter your email" />
              <button className="site-btn sb-gradients">Get Started</button>
            </form>
          </div>
          <div className="col-md-6">
            <img src={laptopImage} className="laptop-image" alt="Laptop" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
