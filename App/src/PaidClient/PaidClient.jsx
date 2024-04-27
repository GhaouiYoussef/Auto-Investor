import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Plot from 'react-plotly.js';
import axios from 'axios';
import './PaidClient.scss'; 
const CandlestickChart = () => {
  const [candlestickData, setCandlestickData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [selectedCoin, startDate, endDate]);

  const fetchData = async () => {
    if (!selectedCoin || !startDate || !endDate) return;
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/fetchData?coin=${selectedCoin}`); 
      const filteredData = response.data.filter(item => {
        const timestamp = new Date(item.timestamp);
        return timestamp >= new Date(startDate) && timestamp <= new Date(endDate);
      });
      setCandlestickData(filteredData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
      setLoading(false);
    }
  };

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="candlestick-chart-container">
      <h2>Cryptocurrency Price Trends</h2>
      <h4>Select the coin and the time interval of your desired visualization</h4>
      <div className="chart-options">
        <select value={selectedCoin} onChange={handleCoinChange}>
          <option value="">Select a cryptocurrency</option>
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          {/* Add more options for other cryptocurrencies */}
        </select>
        <input type="date" value={startDate} onChange={handleStartDateChange} />
        <span>-</span>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
        <Link to="/Dashboard/PaidClient/CandlestickChartExplanation" className="explanation-link">
          What is a candlestick chart?
        </Link>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <Plot
          data={[
            {
              type: 'candlestick',
              x: candlestickData.map(item => item.timestamp),
              open: candlestickData.map(item => item.open),
              high: candlestickData.map(item => item.high),
              low: candlestickData.map(item => item.low),
              close: candlestickData.map(item => item.close),
              increasing: { line: { color: 'green', width: 2 } },
              decreasing: { line: { color: 'red', width: 2 } },
            },
          ]}
          layout={{
            width: '100%',
            height: 600,
            title: 'Candlestick Chart',
            xaxis: {
              title: 'Time',
              type: 'date',
              tickformat: '%Y-%m-%d %H:%M:%S',
            },
            yaxis: {
              title: 'Price',
            },
            plot_bgcolor: 'black', 
          }}
        />
      )}
    </div>
  );
};

export default CandlestickChart;

//makes an API request to fetch data based on the selected coin by passing it as a query parameter in the URL (http://localhost:3001/fetchData?coin=${selectedCoin}). The fetched data is then filtered based on the selected time interval (startDate and endDate). The filtered data is then set in the state variable candlestickData.