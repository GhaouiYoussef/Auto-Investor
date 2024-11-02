import React from 'react';
import { Link } from 'react-router-dom';
import { TiDevicePhone, TiWallet, TiHeadphones, TiArrowRepeat, TiPanel, TiChartBar } from 'react-icons/ti'; // Import necessary icons
import './FeaturesSection.css'; // Import the appropriate CSS file for styling
import { IoShield } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { RiMobileDownloadFill } from "react-icons/ri";
import { TfiPanel } from "react-icons/tfi";
import { IoStatsChart } from "react-icons/io5";
import { TbArrowsExchange } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

function FeaturesSection() {
  const features = [
    {
      icon: <RiMobileDownloadFill />,
      title: 'User-Friendly PWA',
      description: 'Manage your crypto investments seamlessly on-the-go with our intuitive and responsive Progressive Web App (PWA), accessible from any device.',
      link: '#',
    },
    {
      icon: <IoShield />,
      title: 'Safe & Secure',
      description: 'Your data and investments are safeguarded with industry-leading security measures, ensuring a safe and secure experience.',
      link: '#',
    },
    {
      icon: <FaWallet />,
      title: 'Integrated Wallet',
      description: 'Keep all your cryptocurrencies in one place with our integrated wallet, designed for easy and efficient management of your digital assets.',
      link: '#',
    },
    // {
    //   icon: <MdSupportAgent />,
    //   title: '24/7 Expert Support',
    //   description: 'Get round-the-clock assistance from our knowledgeable support team for any queries or issues you may encounter.',
    //   link: '#',
    // },
    {
      icon: <TbArrowsExchange />,
      title: 'Instant Crypto Exchange',
      description: 'Enjoy quick and seamless exchanges of various cryptocurrencies, ensuring you never miss out on market opportunities.',
      link: '#',
    },
    {
      icon: <TfiPanel />,
      title: 'Automated Recurring Buys',
      description: 'Set up automatic and customizable recurring purchases to grow your crypto portfolio effortlessly over time.',
      link: '#',
    },
    {
      icon: <IoStatsChart />,
      title: 'Smart, Risk-Minimized Investments',
      description: 'Our platform monitors over 100 coins, employing smart algorithms to minimize risk and ensure safe, moderate, and long-term investments—ideal for beginners and seasoned investors alike.',
      link: '#',
    },
  ];

  function Feature({ icon, title, description, link }) {
    return (
      <div className="col-md-6 col-lg-4 feature">
        <div className="icon-wrapper">{icon}</div>
        <div className="feature-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <Link to={link} className="readme"><span>Read More</span></Link>
        </div>
      </div>
    );
  }

  return (
    <section className="features-section spad gradient-bgp">
      <div className="container">
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
