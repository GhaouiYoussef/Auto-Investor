/*import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js-dist';
import { fetchData } from '../../../Server/BinanceApi/Mango_parse'; // Import fetchData function from mongoParse.jsx

function CandlestickChart() {
    const [candlestickData, setCandlestickData] = useState([]);

    useEffect(() => {
        const fetchCandlestickData = async () => {
            try {
                const data = await fetchData(); // Fetch data from MongoDB
                setCandlestickData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCandlestickData();
    }, []);

    useEffect(() => {
        // Only update the plot when candlestickData changes
        if (candlestickData.length > 0) {
            const plotData = [{
                x: candlestickData.map(item => item.timestamp),
                open: candlestickData.map(item => item.open),
                high: candlestickData.map(item => item.high),
                low: candlestickData.map(item => item.low),
                close: candlestickData.map(item => item.close),
                type: 'candlestick'
            }];

            const layout = {
                title: 'Candlestick Chart'
            };

            Plotly.newPlot('candlestick-chart', plotData, layout);
        }
    }, [candlestickData]);

    return <div id="candlestick-chart" />;
}

export default CandlestickChart;*/
