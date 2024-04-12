import React from 'react';
import './Packages.css';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link } from 'react-router-dom';

const Packages = () => {
  return (
    <div className="packages-container">
      <div className="packages-heading">
        <h1>Our Trading Packages</h1>
       
        <p>Grow your money with our stable and profitable packages that suit you best!</p>
      </div>
      <div className="packages">
        <div className="package">
          <h2>Basic Package</h2>
          <p>$10 per month</p>
          <p>Access to basic features</p>
          <p>7-day free trial</p>
          <Link to="/dashboard/InvestmentPlanRegistration" style={{ textDecoration: 'none' }} className='link-box'>
          <AppRegistrationIcon className="icon" />
          <p>Invest now</p>
          </Link>
          
        </div>
        <div className="package">
          <h2>Auto-Advisor Package</h2>
          <p>$20 per month</p>
          <p>Access to advanced features</p>
          <p>7-day free trial</p>
          <Link to="/dashboard/InvestmentPlanRegistration" style={{ textDecoration: 'none' }} className='link-box'>
          <AppRegistrationIcon className="icon" />
          <p>Invest now</p>
          </Link>
        </div>
        <div className="package">
          <h2>Auto-Investor Package</h2>
          <p>$30 per month</p>
          <p>Access to premium features</p>
          <p>7-day free trial</p>
          <Link to="/dashboard/InvestmentPlanRegistration" style={{ textDecoration: 'none' }} className='link-box'>
          <AppRegistrationIcon className="icon" />
          <p>Invest now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
