import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './componentsGeneral/Header';
import Page2 from './componentsSignup-Login/Page2';
import PageDacceuil from './componentsPageDacceuil/PageDacceuil';
import Login from './componentsSignup-Login/Loginin';
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

import PaidClient from '../PaidClient/PaidClient';

import googleOneTap from "google-one-tap";
import e from 'cors';


const options = {
  client_id: "596157546363-nkhul4k9ieephhifor3ag73it56lj3ar.apps.googleusercontent.com",
  auto_select: false,
  cancel_on_tap_outside: false,
  context: "signin",
};

const App = () => {
  const [loginData, setLoginData] = useState(       localStorage.getItem("loginData")
  ? JSON.parse(localStorage.getItem("loginData"))
  : null
);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    // console.log('loginData', loginData);
    const pathParts = window.location.pathname.split('/'); // Split the URL path by '/'
    if ( loginData === null) {
      console.log('loginData from if', loginData);
      googleOneTap(options, async (response) => {
        console.log(response);
        const res = await fetch("http://localhost:3001/api/google-login", {
          method: "POST",
          body: JSON.stringify({
            token: response.credential,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await res.json();
        setLoginData(data); // Set loginData equal to data
        localStorage.setItem("loginData", JSON.stringify(data));
        setIsAuthenticated(true);
        // console.log(data);
        // console.log('Hello');
        // console.log('loginData', loginData);
        if (data) {
          window.location.href = "/Dashboard/PageAcceuilDash";
        }
      });
    }
    console.log('pathParts', pathParts);
    console.log('loginData fro elif', loginData);
    if (pathParts.length <= 2 && loginData !==null ) {
      console.log('hak lena', loginData);
      setIsAuthenticated(true);
      window.location.href = "/Dashboard/PageAcceuilDash";
    }
  }, [loginData]);
  


  // const handlelogout = () => {
  //   console.log('logout');
  //   localStorage.removeItem("loginData");
  //   setLoginData(null);
  // }

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
          <Route path="/Dashboard/Profile" element={<Profile />} />
          <Route path="/Dashboard/PageAcceuilDash" element={<PageAcceuilDash />} />
          <Route path="/Dashboard/Packages" element={<Packages />} />
          <Route path="/Dashboard/Payment" element={<Payment />} />
          <Route path="/Dashboard/PaymentSuccess" element={<PaymentSuccess />} />
          <Route path="/Dashboard/PaidClient" element={<PaidClient />} />
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