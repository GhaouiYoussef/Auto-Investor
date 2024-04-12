import React from 'react';
import './PortfolioSummary.scss';


// this is just an example , the data will be fetched dynamically when the backend is ready 
const PortfolioSummary = () => {
  
  const topPortfolios = [
    {
      totalValue: 5000,
      profit: 800,
      coins: [
        { name: 'Bitcoin', profit: 400 },
        { name: 'Ethereum', profit: 300 },
        { name: 'Litecoin', profit: 100 }
      ]
    },
    {
      totalValue: 7000,
      profit: 1200,
      coins: [
        { name: 'Ethereum', profit: 600 },
        { name: 'Bitcoin', profit: 400 },
        { name: 'Ripple', profit: 200 }
      ]
    },
    {
      totalValue: 6000,
      profit: 1000,
      coins: [
        { name: 'Bitcoin', profit: 500 },
        { name: 'Litecoin', profit: 300 },
        { name: 'Ethereum', profit: 200 }
      ]
    }
  ];

  return (
    <div className="portfolio-summary">
      <h2>Portfolio Summary (Top 3 Portfolios)</h2>
      {topPortfolios.map((portfolio, index) => (
        <div key={index} className="portfolio">
          <h3>Portfolio {index + 1}</h3>
          <div className="portfolio-details">
            <p>Total Value: ${portfolio.totalValue}</p>
            <p>Profit: ${portfolio.profit}</p>
            <ul>
              {portfolio.coins.map((coin, coinIndex) => (
                <li key={coinIndex}>
                  {coin.name}: ${coin.profit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSummary;
