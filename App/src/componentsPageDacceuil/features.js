import React from 'react';
import './features.css';
const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__inner">
          <h2 className="features__title">Why Auto Investor</h2>
          <div className="features__grid">
            <div className="features__item">
              <h3 className="features__item-title">Easy to use</h3>
              <p className="features__item-description">
                Our platform is designed for both beginners and experienced investors.
              </p>
            </div>
            <div className="features__item">
              <h3 className="features__item-title">Diverse portfolio</h3>
              <p className="features__item-description">
                We help you build a well-diversified portfolio of crypto assets.
              </p>
            </div>
            <div className="features__item">
              <h3 className="features__item-title">Active management</h3>
              <p className="features__item-description">
                Our technology actively manages your portfolio to maximize returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;