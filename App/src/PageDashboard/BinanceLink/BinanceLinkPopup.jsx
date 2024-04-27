import React, { useState } from 'react';
import './BinanceLinkPopup.scss';
import ClearIcon from '@mui/icons-material/Clear';
const BinanceLinkPopup = ({ onClose, onLinkSuccess }) => {
  const [apiKey, setApiKey] = useState('');
  const [apiSecretKey, setApiSecretKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!apiKey.trim() || !apiSecretKey.trim()) {
      setError('Please enter both API Key and API Secret Key.');
      return;
    }
    // Simulate linking process (replace with your actual logic to link Binance account)
    // Here, we assume the account is successfully linked
    // In a real application, you would make a request to your backend to link the account securely
    // For simplicity, we just call the onLinkSuccess callback
    onLinkSuccess();
    onClose();
  };

  return (
    <div className="binance-link-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}><ClearIcon/></button>
        <h2>Link Your Binance Account</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="apiKey">API Key:</label>
            <input
              type="text"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apiSecretKey">API Secret Key:</label>
            <input
              type="password"
              id="apiSecretKey"
              value={apiSecretKey}
              onChange={(e) => setApiSecretKey(e.target.value)}
            />
          </div>
          <button type="submit">Link Account</button>
        </form>
      </div>
    </div>
  );
};

export default BinanceLinkPopup;
