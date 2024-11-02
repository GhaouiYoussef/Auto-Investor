import React from 'react';
import aboutImg from './img/about-img.png';

function AboutSection() {
  return (
    <section className="about-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 about-text">
            <h2>Discover Cryvor</h2>
            <h5>Your Smart Path to Effortless Crypto Investment</h5>
            <p>
              Welcome to Cryvor—your trusted platform for automated, streamlined cryptocurrency investments.
              Using cutting-edge algorithms, Cryvor simplifies the complexities of crypto investing, providing you with a seamless way to grow your digital assets. 
              Whether you're a seasoned investor or new to the crypto world, Cryvor equips you with the tools to make informed decisions and stay ahead in the fast-paced digital market.
            </p>
            <p>
              No prior knowledge of cryptocurrency or finance is needed to use Cryvor—all you need is a Binance account! Our platform is accessible to all ages, making it easy for anyone to start their crypto journey with confidence.
            </p>
            <a href="/get-started" className="site-btn sb-gradients sbg-line mt-5">Get Started</a>
          </div>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="Cryvor platform overview" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
