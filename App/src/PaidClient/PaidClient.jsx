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
        const response = await axios.get(`http://localhost:3001/fetchData`, {
            params: {
                coin: selectedCoin,
                startDate,
                endDate,
            },
        });
        setCandlestickData(response.data);
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
          <option value="AAVE">AAVE</option>
<option value="AKT">AKT</option>
<option value="ALGO">ALGO</option>
<option value="APTOS">APTOS</option>
<option value="ARBITRUM">ARBITRUM</option>
<option value="AR">AR</option>
<option value="AVAX">AVAX</option>
<option value="AXL">AXL</option>
<option value="AXS">AXS</option>
<option value="BNB">BNB</option>
<option value="BCH">BCH</option>
<option value="BSV">BSV</option>
<option value="BTC">BTC</option>
<option value="BGB">BGB</option>
<option value="TENSOR">TENSOR</option>
<option value="BTT">BTT</option>
<option value="BONK">BONK</option>
<option value="ADA">ADA</option>
<option value="CELES">CELES</option>
<option value="LINK">LINK</option>
<option value="CHZ">CHZ</option>
<option value="CFX">CFX</option>
<option value="ATOM">ATOM</option>
<option value="CRONOS">CRONOS</option>
<option value="DAI">DAI</option>
<option value="MANA">MANA</option>
<option value="DOGE">DOGE</option>
<option value="XEC">XEC</option>
<option value="EGLD">EGLD</option>
<option value="ETC">ETC</option>
<option value="ENS">ENS</option>
<option value="ETH">ETH</option>
<option value="FTM">FTM</option>
<option value="FIL">FIL</option>
<option value="DUSD">DUSD</option>
<option value="FLOW">FLOW</option>
<option value="FXS">FXS</option>
<option value="FRAX">FRAX</option>
<option value="FTT">FTT</option>
<option value="GALA">GALA</option>
<option value="GNO">GNO</option>
<option value="HBAR">HBAR</option>
<option value="HNT">HNT</option>
<option value="IMX">IMX</option>
<option value="INJ">INJ</option>
<option value="ICP">ICP</option>
<option value="IOTA">IOTA</option>
<option value="JUP">JUP</option>
<option value="KASP">KASP</option>
<option value="KAVA">KAVA</option>
<option value="KLAY">KLAY</option>
<option value="KCS">KCS</option>
<option value="LDO">LDO</option>
<option value="LTC">LTC</option>
<option value="MKR">MKR</option>
<option value="MTL">MTL</option>
<option value="MATIC">MATIC</option>
<option value="MINA">MINA</option>
<option value="XMR">XMR</option>
<option value="NEAR">NEAR</option>
<option value="NEO">NEO</option>
<option value="ROSE">ROSE</option>
<option value="OKB">OKB</option>
<option value="OPT">OPT</option>
<option value="ORD">ORD</option>
<option value="CAKE">CAKE</option>
<option value="PPC">PPC</option>
<option value="PENDLE">PENDLE</option>
<option value="PLM">PLM</option>
<option value="DOT">DOT</option>
<option value="QNT">QNT</option>
<option value="RNDR">RNDR</option>
<option value="XRP">XRP</option>
<option value="RPL">RPL</option>
<option value="RON">RON</option>
<option value="SEI">SEI</option>
<option value="SHIB">SHIB</option>
<option value="SC">SC</option>
<option value="SOL">SOL</option>
<option value="SPRK">SPRK</option>
<option value="STX">STX</option>
<option value="XLM">XLM</option>
<option value="SUI">SUI</option>
<option value="LUNA">LUNA</option>
<option value="USDT">USDT</option>
<option value="XTZ">XTZ</option>
<option value="GRT">GRT</option>
<option value="SAND">SAND</option>
<option value="THETA">THETA</option>
<option value="RUNE">RUNE</option>
<option value="TON">TON</option>
<option value="TRX">TRX</option>
<option value="TUSD">TUSD</option>
<option value="UNI">UNI</option>
<option value="LEO">LEO</option>
<option value="USDC">USDC</option>
<option value="VET">VET</option>
<option value="WEMIX">WEMIX</option>
<option value="WOO">WOO</option>
<option value="WBTC">WBTC</option>

         
          
         
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
