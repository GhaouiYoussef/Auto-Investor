import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './componentsGeneral/Header';
import Page2 from './componentsSignup-Login/Page2';
import PageDacceuil from './componentsPageDacceuil/PageDacceuil';
import AboutUs from './ComponentsAboutUs/AboutUs';
import OurServices from './Com_Services/ourServices';
import Contact from './Com_contact/contact';
import FAQ from './Com_faq/faq';
import Currency from './Com_currency/currency';
import OurTeam from './Com_team/Team';
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
import PaidClient from '../PaidClient/PaidClient';
const App = () => {
  
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div>
        <HeaderControl />
        <Routes>
          <Route path="/" element={<PageDacceuil />} />
          <Route path="/Page-Signup" element={<Page2 />} />
          <Route path="/Page-Login" element={<Login />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/Dashboard" component={<Dashboard/>} />       
          <Route path="/Dashboard/TransactionHistory" element={<TransactionHistory/>} /> 
          <Route path="/Dashboard/Profile" element={<Profile/>} /> 
          <Route path="/Dashboard/PageAcceuilDash" element={<PageAcceuilDash/>} />
          <Route path="/Dashboard/Packages" element={<Packages/>} />
          <Route path="/Dashboard/Payment" element={<Payment/>} />
          <Route path="/Dashboard/PaymentSuccess" element={<PaymentSuccess/>} />
          <Route path="/Dashboard/PaidClient" element={<PaidClient/>} />
        </Routes>
      </div>
    </Router>
  );
};

const HeaderControl = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the current route path starts with "/Dashboard"
    renderHeader();
  }, [location.pathname]); // Re-run effect when location change

  // Function to render the appropriate header based on the route
  function renderHeader() {
    if (location.pathname.startsWith("/Dashboard")) {
      return <Header2 />;
    } else {
      return <Header />;
    }
  }

  return renderHeader();
};

export default App;