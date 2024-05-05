import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupSucces.scss' // Import SCSS file

const SuccessPage = () => {
  const navigate = useNavigate();

  // Redirect to login page after 3 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/Page-Login'); 
    }, 3000); 

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="success-container">
      <div className="success-content">
        <h2 className="success-title">Successful Signup!</h2>
        <h4 className="success-message">You have successfully signed up. Please wait while we redirect you to the login page...</h4>
      </div>
    </div>
  );
};

export default SuccessPage;
