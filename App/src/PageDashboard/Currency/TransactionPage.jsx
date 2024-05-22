import React, { useState } from 'react';
import './TransactionPage.css';

const TransactionPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('BTC');
  const [buyPrice, setBuyPrice] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [sellAmount, setSellAmount] = useState('');

  const coins = [
    'AAVE', 'ADA', 'AKT', 'ALGO', 'AR', 'ATOM', 'AVAX', 'AXS', 'BCH', 'BGB', 'BNB', 'BSV',
    'BTC', 'CFX', 'CHZ', 'CRONOS', 'DAI', 'DOGE', 'EGLD', 'ETC', 'ETH', 'FLOW', 'FRAX',
    'FTM', 'FTT', 'FXS', 'GALA', 'GNO', 'LINK', 'MANA'
  ];

  const handleBuy = () => {
    const buyData = {
      currency: selectedCurrency,
      price: buyPrice,
      amount: buyAmount,
    };
    // Make API call to backend to handle buy action
    console.log('Buying:', buyData);
  };

  const handleSell = () => {
    const sellData = {
      currency: selectedCurrency,
      price: sellPrice,
      amount: sellAmount,
    };
    // Make API call to backend to handle sell action
    console.log('Selling:', sellData);
  };

  return (
    <div className="transaction-page">
      <div className="transaction-form">
        <div className="form-header">Spot</div>
        <div className="currency-selector">
          <label htmlFor="currency">Currency:</label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {coins.map((coin) => (
              <option key={coin} value={coin}>{coin}</option>
            ))}
          </select>
        </div>
        <div className="limit-section">
          <div className="limit">
            <span>Limit</span>
            <div className="limit-dropdown">▼</div>
          </div>
        </div>
        <div className="form-content">
          <div className="form-group">
            <label>Price (USDT)</label>
            <input
              type="text"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              placeholder="0.00"
            />
          </div>
          <div className="form-group">
            <label>Amount ({selectedCurrency})</label>
            <input
              type="text"
              value={buyAmount}
              onChange={(e) => setBuyAmount(e.target.value)}
              placeholder="0.00"
            />
          </div>
          <div className="form-group">
            <label>Total (USDT)</label>
            <input type="text" value={(buyPrice * buyAmount).toFixed(2)} readOnly placeholder="0.00" />
          </div>
          <button className="buy-button" onClick={handleBuy}>Buy {selectedCurrency}</button>
        </div>
      </div>
      
      <div className="transaction-form">
        <div className="form-header">Spot</div>
        <div className="currency-selector">
          <label htmlFor="currency">Currency:</label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {coins.map((coin) => (
              <option key={coin} value={coin}>{coin}</option>
            ))}
          </select>
        </div>
        <div className="limit-section">
          <div className="limit">
            <span>Limit</span>
            <div className="limit-dropdown">▼</div>
          </div>
        </div>
        <div className="form-content">
          <div className="form-group">
            <label>Price (USDT)</label>
            <input
              type="text"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              placeholder="0.00"
            />
          </div>
          <div className="form-group">
            <label>Amount ({selectedCurrency})</label>
            <input
              type="text"
              value={sellAmount}
              onChange={(e) => setSellAmount(e.target.value)}
              placeholder="0.00"
            />
          </div>
          <div className="form-group">
            <label>Total (USDT)</label>
            <input type="text" value={(sellPrice * sellAmount).toFixed(2)} readOnly placeholder="0.00" />
          </div>
          <button className="sell-button" onClick={handleSell}>Sell {selectedCurrency}</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
