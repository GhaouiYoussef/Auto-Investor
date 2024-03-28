import React from 'react';
import './HowItWorks.css';
const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__inner">
          <h2 className="how-it-works__title">How it Works</h2> <div className="how-it-works__steps"> <div className="how-it-works__step"> <h3 className="how-it-works__step-number">1</h3> <h4 className="how-it-works__step-title">Create an account</h4> <p className="how-it-works__step-description"> Sign up for a free account and complete the onboarding process. </p> </div> <div className="how-it-works__step"> <h3 className="how-it-works__step-number">2</h3> <h4 className="how-it-works__step-title">Fund your account</h4> <p className="how-it-works__step-description"> Connect a payment method and add funds to your account. </p> </div> <div className="how-it-works__step"> <h3 className="how-it-works__step-number">3</h3> <h4 className="how-it-works__step-title">Start investing</h4> <p className="how-it-works__step-description"> Choose an investment strategy and let Auto Investor handle the rest. </p> </div> </div> </div> </div> </section> ); };

export default HowItWorks;