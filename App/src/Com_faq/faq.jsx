// FAQ.jsx
import React from 'react';
import styled from 'styled-components';

const FAQ = () => {
  return (
    <StyledFAQ>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How does the auto-investing feature work?</h3>
        <p>
          Our auto-investing feature uses advanced algorithms to analyze market trends and
          automatically invests your funds in various cryptocurrencies based on your preferences
          and risk tolerance. It helps you optimize your investment strategy without the need
          for constant monitoring.
        </p>
      </div>
      <div className="faq-item">
        <h3>Why should I trust the auto-investing feature?</h3>
        <p>
          We prioritize security and transparency in our auto-investing platform. Our algorithms
          are designed to make data-driven investment decisions, and we implement rigorous security
          measures to protect your assets. Additionally, our platform provides real-time updates
          and performance tracking to ensure full transparency.
        </p>
      </div>
      <div className="faq-item">
        <h3>Is my investment portfolio diversified?</h3>
        <p>
          Yes, our auto-investing feature automatically diversifies your investment portfolio
          across multiple cryptocurrencies to minimize risk and maximize potential returns. We
          continuously monitor market conditions and adjust your portfolio accordingly to maintain
          optimal diversification.
        </p>
      </div>
      {/* Add more FAQ items as needed */}
    </StyledFAQ>
  );
};

export default FAQ;

// Styled Components for FAQ
const StyledFAQ = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .faq-item {
    margin-bottom: 30px;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }
`;
