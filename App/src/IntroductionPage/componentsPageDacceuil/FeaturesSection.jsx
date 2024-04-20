import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturesSection.css'; // Import the appropriate CSS file for styling

function FeaturesSection() {
  // Define an array of feature data
  const features = [
    {
      icon: 'ti-mobile',
      title: 'User-Friendly PWA',
      description: 'Manage your crypto investments seamlessly on-the-go with our intuitive and responsive Progressive Web App (PWA), accessible from any device.',
      link: '#',
    },
    {
      icon: 'ti-shield',
      title: 'Safe & Secure',
      description: 'Your data and investments are safeguarded with industry-leading security measures, ensuring a safe and secure experience.',
      link: '#',
    },
    {
      icon: 'ti-wallet',
      title: 'Integrated Wallet',
      description: 'Keep all your cryptocurrencies in one place with our integrated wallet, designed for easy and efficient management of your digital assets.',
      link: '#',
    },
    {
      icon: 'ti-headphone-alt',
      title: '24/7 Expert Support',
      description: 'Get round-the-clock assistance from our knowledgeable support team for any queries or issues you may encounter.',
      link: '#',
    },
    {
      icon: 'ti-reload',
      title: 'Instant Crypto Exchange',
      description: 'Enjoy quick and seamless exchanges of various cryptocurrencies, ensuring you never miss out on market opportunities.',
      link: '#',
    },
    {
      icon: 'ti-panel',
      title: 'Automated Recurring Buys',
      description: 'Set up automatic and customizable recurring purchases to grow your crypto portfolio effortlessly over time.',
      link: '#',
    },
  ];

  // Define the Feature component within FeaturesSection.jsx
  function Feature({ icon, title, description, link }) {
    return (
      <div className="col-md-6 col-lg-4 feature">
        <i className={icon}></i>
        <div className="feature-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <Link to={link} className="readme"><span>Readmore</span></Link>
        </div>
      </div>
    );
  }

  return (
    <section className="features-section spad gradient-bgp">
      <div className="containerf">
        <div className="section-title text-center">
          <h2>Our Features</h2>
          <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
