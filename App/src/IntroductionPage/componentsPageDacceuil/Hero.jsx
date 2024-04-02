import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero">
      <div className="container1">
        <div className="hero__inner">
          <h1 className="hero__title">
            Invest in crypto assets <br /> the easy way
          </h1>
          <p className="hero__subtitle">
            CryptoPal is a professional platform that simplifies cryptocurrency
            investments. We provide an easy, sophisticated, and trustworthy way
            to invest in crypto assets.
          </p>
          <div className="hero__cta">
            <Link to="/Page-Signup" className="button button--primary">

              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Hero;
