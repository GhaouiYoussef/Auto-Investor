import React from 'react';
import './Process.css'; // Import the CSS file for styling
import binance from './img/binance.svg';
import Key from './img/Key.svg';
import ww from './img/nn.svg';

const Process = () => {
  return (
    <section className="process-section spad">
      <div className="containerp">
        <div className="section-title text-center">
          <h2>Get Started with Cypstor</h2>
          <p>Begin your journey in cryptocurrency investing with Cypstor's streamlined and educational platform. We provide you with the tools and knowledge you need to invest confidently.</p>
        </div>
        <div className="row">
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={binance} alt="Binance Logo" />
              </figure>
              <h4>Set Up Your Account</h4>
              <p>Register your account effortlessly on Binance through Cypstor to begin your investment journey with a reputable platform.</p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={Key} alt="Key Icon" />
              </figure>
              <h4>Create an API Key</h4>
              <p>Generate a secure API key to seamlessly connect Cypstor to your account for an automated and optimized investment experience.</p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={ww} alt="Investment Icon" />
              </figure>
              <h4>Start Investing with Ease</h4>
              <p>Utilize Cypstor's automated features to invest in cryptocurrencies effortlessly, maximizing opportunities with minimal effort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
