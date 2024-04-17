import React from 'react';
import laptopImage from './img/laptop.png';
import './HeroSection.css'
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-text">
            <h2>Invest in <span>Crypto Effortlessly</span> <br />With Cryvor</h2>
            <h4>Use the power of sophisticated AI to earn money            </h4>
            <h4>Subscribe to our newsletter</h4>

            <form className="hero-subscribe-from">
            <input  className='ahh' type="text" placeholder="Enter your email" />
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
