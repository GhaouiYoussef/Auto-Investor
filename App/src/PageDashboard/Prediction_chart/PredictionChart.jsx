import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import './PredictionChart.css';

const PredictionChart = () => {
  const [coinData, setCoinData] = useState([]);
  const [predictionsData, setPredictionsData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCoinData();
  }, [selectedCoin]);

  const fetchCoinData = async () => {
    if (!selectedCoin) return;
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/fetchLast30Data`, {
        params: { coin: selectedCoin },
      });
      console.log('response', response);

      setCoinData(response.data.dataFrom0to30); // Update coinData with the first response data
      setPredictionsData(response.data.dataFrom30to0); // Update predictionsData with the second response data

      setLoading(false);
      console.log('Coin data:', response.data.dataFrom0to30);
      console.log('Predictions data:', response.data.dataFrom30to0);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
      setLoading(false);
    }
  };

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  return (
    <div className="prediction-chart-container">
      <h2>Cryptocurrency Price Prediction</h2>
      <div className="chart-options">
        <select value={selectedCoin} onChange={handleCoinChange}>
          <option value="">Select a cryptocurrency</option>
          {['AAVE', 'ADA', 'AKT', 'ALGO', 'AR', 'ATOM', 'AVAX', 'AXS', 'BCH', 'BGB', 'BNB', 'BSV', 'BTC', 'CFX', 'CHZ', 'CRONOS', 'DAI', 'DOGE', 'EGLD', 'ETC', 'ETH', 'FLOW', 'FRAX', 'FTM', 'FTT', 'FXS', 'GALA', 'GNO', 'LINK', 'MANA'].map((coin) => (
            <option key={coin} value={coin}>{coin}</option>
          ))}
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && coinData.length > 0 && predictionsData.length > 0 && (
        <Plot
          data={[
            {
              type: 'scatter',
              mode: 'lines+markers',
              x: coinData.map(item => item.timestamp * 1000),
              y: coinData.map(item => item.Close),
              marker: { color: 'blue' },
              name: 'Historical Data'
            },
            {
              type: 'scatter',
              mode: 'lines+markers',
              x: [coinData[coinData.length - 1].timestamp * 1000, ...predictionsData.map(item => item.timestamp * 1000)], // Start with the last historical timestamp and continue with predicted timestamps
              y: [coinData[coinData.length - 1].Close, ...predictionsData.map(item => item.Close)], // Start with the last historical price and continue with predicted prices
              marker: { color: 'red' },
              name: 'Predicted Data'
            }
          ]}
          layout={{
            width: '100%',
            height: 600,
            title: 'Price Prediction Chart',
            xaxis: {
              title: 'Time',
              type: 'date',
              tickformat: '%Y-%m-%d %H:%M:%S',
            },
            yaxis: {
              title: 'Price (USDT)',
            },
            plot_bgcolor: 'black',
          }}
        />
      )}
    </div>
  );
};

export default PredictionChart;
