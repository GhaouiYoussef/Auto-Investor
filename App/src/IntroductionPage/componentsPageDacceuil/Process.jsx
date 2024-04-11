import React from 'react';
import './Process.css'; // Import the CSS file for styling if it exists
import binance from './img/binance.svg';
import Key from './img/Key.svg';
import ww from './img/nn.svg';
const Process = () => {
  return (
    <section className="process-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Get Started With Crypto</h2>
          <p>Start learning about Bitcoin with interactive tutorials. It’s fun, easy, and takes only a few minutes!</p>
        </div>
        <div className="row">
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={binance} alt="#" />
              </figure>
              <h4>Create Your Binance Account</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={Key} alt="#" />
              </figure>
              <h4>Create An API key</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={ww} alt="#" />
              </figure>
              <h4>Start investing with zero effort</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
