// Currency.jsx
import React from 'react';
import styled from 'styled-components';

const Currency = () => {
  return (
    <StyledCurrency>
      <h2>Auto-Investing with CryptoPal</h2>
      <p>
        CryptoPal's auto-investing platform offers a revolutionary approach to cryptocurrency investment, 
        empowering users to effortlessly grow their wealth in the dynamic world of digital assets.
      </p>
      <p>
        Our platform utilizes cutting-edge algorithms and machine learning technology to analyze market 
        trends, identify lucrative investment opportunities, and execute trades automatically on behalf 
        of our users. With CryptoPal, you can harness the power of automation to optimize your investment 
        strategy and maximize your returns.
      </p>
      <p>
        One of the key features of CryptoPal is its user-friendly interface and intuitive design. Whether 
        you're a seasoned investor or new to the world of cryptocurrencies, our platform provides a 
        seamless and hassle-free investment experience. Simply set your investment preferences, and let 
        CryptoPal handle the rest.
      </p>
      <p>
        With CryptoPal, you can diversify your investment portfolio across a wide range of cryptocurrencies, 
        including Bitcoin, Ethereum, and many others. Our platform offers real-time market data, performance 
        analytics, and personalized investment recommendations to help you make informed decisions and 
        stay ahead of the curve.
      </p>
      <p>
        Join CryptoPal today and unlock the potential of auto-investing in cryptocurrencies. Take control 
        of your financial future and embark on a journey towards wealth creation with CryptoPal as your 
        trusted investment partner.
      </p>
    </StyledCurrency>
  );
};

export default Currency;

// Styled Components for Currency
const StyledCurrency = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;
