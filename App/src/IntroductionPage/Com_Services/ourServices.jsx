// OurServices.jsx
import React from 'react';
import './OurServices.css'; // Import your CSS file for styling

const OurServices = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service">
        <h3>Auto-Investing in Cryptocurrency</h3>
        <p>
          We offer an automated investment solution that allows you to invest in cryptocurrencies
          effortlessly. Our algorithms analyze market trends to optimize your investment strategy.
        </p>
      </div>
      <div className="service">
        <h3>Online Wallet</h3>
        <p>
          Our online wallet provides a secure and convenient way to store your cryptocurrencies.
          Easily manage your digital assets and access them anytime, anywhere.
        </p>
      </div>
      <div className="service">
        <h3>Send Coins</h3>
        <p>
          With our platform, you can easily send cryptocurrencies to anyone, anywhere in the world.
          Whether it's for payments or transfers, we make sending coins simple and fast.
        </p>
      </div>
      <div className="service">
        <h3>Coin Mining</h3>
        <p>
          Start mining cryptocurrencies with our efficient mining solutions. Generate new coins and
          contribute to the security and stability of blockchain networks.
        </p>
      </div>
      <div className="service">
        <h3>Mobile App</h3>
        <p>
          Access our services on the go with our mobile app. Manage your investments, check your
          wallet balance, and send coins right from your smartphone, anytime and anywhere.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
