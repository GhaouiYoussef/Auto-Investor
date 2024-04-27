import React, { useState } from 'react';
import './BinanceLink.scss';
import BinanceLinkPopup from './BinanceLinkPopup'; // Import the popup component

const BinanceLinkForm = ({ onLinkSuccess }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="binance-link-form">
      <h2 onClick={openPopup}>Link Your Binance Account</h2>
      {showPopup && <BinanceLinkPopup onClose={closePopup} onLinkSuccess={onLinkSuccess} />}
    </div>
  );
};

export default BinanceLinkForm;
