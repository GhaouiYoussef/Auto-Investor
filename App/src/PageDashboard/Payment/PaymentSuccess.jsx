import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid'; // Importing the PaidIcon
import './PaymentSuccess.scss';

function PaymentSuccess() {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/Dashboard/PaidClient'); 
    }, 4000); 

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="payment-success-container">
      <PaidIcon className="success-icon" /> {/* Adding the PaidIcon */}
      <h2 className="success-message">Payment Successful!</h2>
      <span className="redirect-info">Redirecting to Paid Client page...</span>
    </div>
  );
}

export default PaymentSuccess;
