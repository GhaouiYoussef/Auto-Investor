import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section spad">\
          <div className="center-container">
  <h2 className='ah'>Our Features</h2>
</div>   
      <div className="container text-center">

        <div className="row">
          <div className="col-md-4 feature">
            <div className="circle-icon">
              <i className="flaticon-023-flask"></i>
            </div>
            <h4>Unique Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-4 feature">
            <div className="circle-icon">
              <i className="flaticon-011-compass"></i>
            </div>
            <h4>Easy to Use</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-4 feature">
            <div className="circle-icon">
              <i className="flaticon-037-idea"></i>
            </div>
            <h4>Unlimited Ideas</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
