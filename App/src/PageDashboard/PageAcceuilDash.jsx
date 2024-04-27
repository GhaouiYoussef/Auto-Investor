import React, { useState } from 'react';
import Sidebar from "./Sidebar/Sidebar";
import './PageAccueilDash.scss';
import Widget from "./widget/Widget";
import Featured from './featured/Featured';
import Chart from './chart/Chart';
import BinanceLinkForm from './BinanceLink/BinanceLinkForm'; // Import the component for linking Binance account

const PageAcceuilDash = () => {
  // State to track whether the user has linked their Binance account
  const [binanceLinked, setBinanceLinked] = useState(false);

  // Render function to show either Binance linking form or dashboard content
  const renderContent = () => {
    if (binanceLinked) {
      return (
        <div className="homeContainer">
          <div className="widgets">
            <Widget type='CryptoTrends' />
            <Widget type="balance"/>
            <Widget type="autoInvestTransactions"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
        </div>
      );
    } else {
      return <BinanceLinkForm onLinkSuccess={() => setBinanceLinked(true)} />;
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
