// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CandlestickSeries, ChartCanvas, Chart } from 'react-stockcharts/lib/series';
// import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
// import { timeParse } from 'd3-time-format';
// import { scaleTime } from 'd3-scale';
// import { fitWidth } from 'react-stockcharts/lib/helper';

// const CandlestickChart = ({ width, ratio }) => {
//   const [candlestickData, setCandlestickData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/fetchData'); // Replace with your actual API endpoint
//         setCandlestickData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const parseDate = timeParse('%Q');
//   const xAccessor = d => parseDate(d.timestamp);
//   const xScale = scaleTime();
//   const xExtents = [
//     xAccessor(candlestickData[0]),
//     xAccessor(candlestickData[candlestickData.length - 1])
//   ];

//   return (
//     <div>
//       <h2>Candlestick Chart</h2>
//       <ChartCanvas
//         width={width}
//         height={400}
//         ratio={ratio}
//         margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
//         seriesName="Candlestick"
//         data={candlestickData}
//         xAccessor={xAccessor}
//         xScale={xScale}
//         xExtents={xExtents}
//       >
//         <Chart id={0} yExtents={d => [d.high, d.low]}>
//           <XAxis axisAt="bottom" orient="bottom" ticks={6} />
//           <YAxis axisAt="left" orient="left" ticks={5} />

//           {/* Candlestick series */}
//           <CandlestickSeries />
//         </Chart>
//       </ChartCanvas>
//     </div>
//   );
// };

// export default fitWidth(CandlestickChart);

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CandlestickSeries, ChartCanvas, Chart } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { timeParse } from 'd3-time-format';
import { scaleTime } from 'd3-scale';
import { fitWidth } from 'react-stockcharts/lib/helper';

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/fetchData');
      console.log('Fetched data:', response.data);
      setCandlestickData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


  const parseDate = timeParse('%Q');
  const xAccessor = d => parseDate(d.timestamp);
  const xScale = scaleTime();
  const xExtents = [
    xAccessor(candlestickData[0]),
    xAccessor(candlestickData[candlestickData.length - 1])
  ];

  return (
    <div>
      <h2>Candlestick Chart</h2>
      <ChartCanvas
        width={width}
        height={400}
        ratio={ratio}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        seriesName="Candlestick"
        data={candlestickData}
        xAccessor={xAccessor}
        xScale={xScale}
        xExtents={xExtents}
      >
        <Chart id={0} yExtents={d => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />

          {/* Candlestick series */}
          <CandlestickSeries />
        </Chart>
      </ChartCanvas>
    </div>
  );


export default fitWidth(CandlestickChart);
