import React from 'react';
import aboutImg from './img/about-img.png';

function AboutSection() {
  return (
    <section className="about-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 about-text">
          <h2>What is Cryvor</h2>
<h5>Cryvor is your trusted gateway to automated and effortless cryptocurrency investing.</h5>
<p>Cryvor revolutionizes the way you invest in the crypto world. By harnessing advanced algorithms and automation, Cryvor streamlines the investment process, making it easy and efficient for you to grow your digital assets. Whether you're a seasoned investor or new to the crypto scene, Cryvor's user-friendly platform empowers you to make smart investment decisions and navigate the dynamic market with confidence.</p>

            <a href="" className="site-btn sb-gradients sbg-line mt-5">Get Started</a>
          </div>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
