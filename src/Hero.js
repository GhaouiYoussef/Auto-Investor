import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1 className="hero__title">
            Invest in crypto assets <br /> the easy way
          </h1>
          <p className="hero__subtitle">
            Auto Investor is a professional platform that simplifies cryptocurrency
            investments. We provide an easy, sophisticated, and trustworthy way
            to invest in crypto assets.
          </p>
          <div className="hero__cta">
            <a href="/signup" className="button button--primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;