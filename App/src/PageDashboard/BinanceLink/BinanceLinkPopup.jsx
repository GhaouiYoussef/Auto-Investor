import React, { useState } from 'react';
import './BinanceLinkPopup.scss';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

const BinanceLinkPopup = ({ onClose, onLinkSuccess }) => {
  
  const [apiKey, setapiKey] = useState('');
  const [apiSecretKey, setapiSecretKey] = useState('');
  const [error, setError] = useState(null);
// Inside your component

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    // Make POST request to create user
    await axios.post('http://localhost:3001/api_balance', {apiKey, apiSecretKey });
    console.log('request sended');
    setapiKey(''); 
    setapiSecretKey(''); 
  }  catch (error) {
    console.error('Error:', error);
    setError('An error occurred while linking the account');
    setapiKey('');
    setapiSecretKey('');
} 
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
              onChange={(e) => setapiKey(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apiSecretKey">API Secret Key:</label>
            <input
              type="password"
              id="apiSecretKey"
              value={apiSecretKey}
              onChange={(e) => setapiSecretKey(e.target.value)}
            />
          </div>
          <button type="submit">Link Account</button>
        </form>
      </div>
    </div>
  );
};

export default BinanceLinkPopup;
