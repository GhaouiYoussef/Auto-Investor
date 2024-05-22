import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './componentsGeneral/Header';
import Page2 from './componentsSignup-Login/Page2';
import PageDacceuil from './componentsPageDacceuil/PageDacceuil';
import Login from './componentsSignup-Login/Loginin';
import SignupSuccess from './componentsSignup-Login/SignupSuccess';
import Dashboard from '../PageDashboard/Dashboard';
import Header2 from './componentsGeneral/Header2';
import Profile from '../PageDashboard/Profile';
import Packages from '../PageDashboard/Packages';
import './App.css';
import Payment from '../PageDashboard/Payment/Payment';
import PaymentSuccess from '../PageDashboard/Payment/PaymentSuccess';
import TransactionHistory from '../PageDashboard/transactionHistory/TransactionHistory';
import PageAcceuilDash from '../PageDashboard/PageAcceuilDash';
//import CandlestickChartExplanation from '../PaidClient/CandlestickChartExplanation';
import axios from 'axios';
import Currency from '../PageDashboard/Currency/Currency';
import PaidClient from '../PaidClient/PaidClient';
import googleOneTap from "google-one-tap";
import TransactionPage from '../PageDashboard/Currency/TransactionPage';
import PredictionChart from '../PageDashboard/Prediction_chart/PredictionChart';
const options = {
  client_id: "596157546363-nkhul4k9ieephhifor3ag73it56lj3ar.apps.googleusercontent.com",
  auto_select: false,
  cancel_on_tap_outside: false,
  context: "signin",
};

const App = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  
  const isAuthenticated = useRef(localStorage.getItem('isAuthenticated') === 'true');
  const pathParts = window.location.pathname.split('/');
  
  useEffect(() => {
    const pathParts = window.location.pathname.split('/'); // Split the URL path by '/'
    console.log('pathParts', pathParts);
  
    const fetchData = async () => {
      try {
        console.log('loginData for checking', loginData['authToken']);
        const verif_res = await axios.post("http://localhost:3001/verify-token", { token: loginData['authToken'] });
        console.log('Verification response:', verif_res.data);
        console.log('Verification response status:', verif_res.status);
        
        // If the verification response status is 200, set isAuthenticated to true
        if (verif_res.status === 200) {
          isAuthenticated.current = true;
          localStorage.setItem('isAuthenticated', 'true'); // Store the value in localStorage
          if (window.location.pathname === "/Page-Login" || window.location.pathname === "/Page-Signup") {
            window.location.href = "/Dashboard/PageAcceuilDash";
          }
        }
        // } else {
        //   window.location.href = "/Page-Login";
        // }
      } catch (error) {
  
        //This two lines are necessary when normal user log in with email and pass
        isAuthenticated.current = false;
        localStorage.setItem('isAuthenticated', 'false'); // Store the value in localStorage
        console.log('isAuthenticated', isAuthenticated);
        window.location.href = "/Page-Login";
        console.error('Error verifying token:', error);
        console.log('error.message', error.message);
  
        // window.location.href = "/Page-Login";
  
      }
    };
  
    console.log('isAuthenticated1 at the start of useEffect', isAuthenticated.current);
  
    if (isAuthenticated.current) {
      fetchData();
    }
  
    if(!isAuthenticated.current && pathParts.length <= 2) {
      console.log('loginData at the start', loginData);
      // isAuthenticated.current = true;
      // localStorage.setItem('isAuthenticated', 'true'); // Store the value in localStorage
      googleOneTap(options, async (response) => {
        try {
          const res = await fetch("http://localhost:3001/api/google-login", {
            method: "POST",
            body: JSON.stringify({
              token: response.credential,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          
  
          console.log('nullData');
          const data = await res.json();
          console.log('data', data);
          
          setLoginData(data); // Set loginData equal to data
          
          localStorage.setItem("loginData", JSON.stringify(data));
          isAuthenticated.current = true;
          localStorage.setItem('isAuthenticated', 'true'); // Store the value in localStorage
  
          window.location.href = "/Dashboard/PageAcceuilDash";
        } catch (error) {
          console.error('Error fetching data from server:', error);
        }
      });
    }
  
    console.log('loginData from Server', loginData);
  
  }, [pathParts]); // Include pathParts in the dependency array
  




  return (
    <Router>
      <div>
        {/* <HeaderControl /> */}
        <HeaderControl  />

        <Routes>
          <Route path="/" element={<PageDacceuil />} />
          <Route path="/Page-Signup" element={<Page2 />} />
          <Route path="/Page-Login" element={<Login />} />
          <Route path="/Dashboard" component={<Dashboard />} />
          <Route path="/Dashboard/TransactionHistory" element={<TransactionHistory />} />
          <Route path="/Dashboard/Profile" element={<PredictionChart />} />
          <Route path="/Dashboard/PageAcceuilDash" element={<PageAcceuilDash />} />
          <Route path="/Dashboard/Packages" element={<Packages />} />
          <Route path="/Dashboard/Payment" element={<Payment />} />
          <Route path="/Dashboard/PaymentSuccess" element={<PaymentSuccess />} />
          <Route path="/Dashboard/PaidClient" element={<PaidClient />} />
          <Route path="/Dashboard/Currency" element={<TransactionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const HeaderControl = ({ setLoginData }) => { // Destructure handleLogout from props
  const location = useLocation();

  useEffect(() => {
    // Check if the current route path starts with "/Dashboard"
    renderHeader();
  }, [location.pathname]); // Re-run effect when location change

  // Function to render the appropriate header based on the route
  function renderHeader() {
    if (location.pathname.startsWith("/Dashboard")) {
      return <Header2  setLoginData={setLoginData}/>; // Pass handleLogout as a prop
    } else {
      return <Header />;
    }
  }

  return renderHeader();
};


export default App;