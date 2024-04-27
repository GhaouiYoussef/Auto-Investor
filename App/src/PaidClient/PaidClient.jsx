import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const CandlestickChart = () => {
  const [candlestickData, setCandlestickData] = useState([]);
//return coin name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fetchData');//http://localhost:3001/fetchData{coinName}
        setCandlestickData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Candlestick Chart</h2>
      <Plot
        data={[
          {
            type: 'candlestick',
            x: candlestickData.map(item => item.timestamp),
            open: candlestickData.map(item => item.open),
            high: candlestickData.map(item => item.high),
            low: candlestickData.map(item => item.low),
            close: candlestickData.map(item => item.close),
            increasing: { line: { color: 'green' } },
            decreasing: { line: { color: 'red' } },
          },
        ]}
        layout={{
          width: 800,
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
        }}
      />
    </div>
  );
};

export default CandlestickChart;
