import React, { useState } from 'react';
import Sidebar from "./Sidebar/Sidebar";
import './PageAccueilDash.scss';
import Widget from "./widget/Widget";
import Featured from './featured/Featured';
import Chart from './chart/Chart';
import BinanceLinkForm from './BinanceLink/BinanceLinkForm'; // Import the component for linking Binance account
import axios from 'axios';

const PageAcceuilDash = () => {
  
  const [binanceLinked, setBinanceLinked] = useState(false);
  const [binanceData, setBinanceData] = useState(null);
  const [balance, setBalance] = useState(null);
  // Render function to show either Binance linking form or dashboard content
  const handleLinkSuccess = async () => {  
    try {
      const response = await axios.get('http://localhost:3001/api_balance2');
      console.log(response.data);
      setBinanceData(response.data);
      setBinanceLinked(true);
      setBalance(response.data.balances);
    } catch (error) {
      console.error('Error fetching Binance data:', error);
      // Handle error
    }
  };
  const renderContent = () => {
    if (binanceLinked) {
      return (
        <div className="homeContainer">
          <div className="widgets">
            <Widget type='CryptoTrends' />
            <div className="balance">
              <h3>Balance</h3>
              {/* Display the specific property or value from the balance object */}
              {balance && <p>{balance.DOGE}</p>}
            </div>
              <Widget type="autoInvestTransactions" />
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
        </div>
      );
    } else {
      return (
        <BinanceLinkForm 
          onLinkSuccess={() => {
            handleLinkSuccess();
            setBinanceLinked(true);
          }} 
        />
      );

    }
  };

  return (
    <div className="PageAcceuilDash">
      <Sidebar />
      {renderContent()}
    </div>
  );
};

export default PageAcceuilDash;
