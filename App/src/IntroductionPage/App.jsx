import React, { useEffect , useState } from 'react';
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
import Profile from '../PageDashboard/Profile';
import Dashboard from '../PageDashboard/Dashboard';
import Header2 from './componentsGeneral/Header2';
import Packages from '../PageDashboard/Packages';
import PageAcceuilDash from '../PageDashboard/PageAcceuilDash';
import './App.css';
import Table from '../PageDashboard/table/Table';
import InvestmentPlanRegistration from '../PageDashboard/InvestmentPlanRegistration/InvestmentPlanRegistration';
import PortfolioSummary from '../PageDashboard/PortfolioSummary/PortfolioSummary';
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
          <Route path="/dashboard" component={<Dashboard/>} /> 
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/Dashboard/PageAcceuilDash" element={<PageAcceuilDash />} />   
          <Route path="/Dashboard/Packages" element={<Packages />} /> 
          <Route path="/dashboard/TransactionHistory" element={<Table />} />     
          <Route path="/dashboard/InvestmentPlanRegistration" element={<InvestmentPlanRegistration />} />
          <Route path="/dashboard/PortfolioSummary" element={<PortfolioSummary />} />
        </Routes>

      </div>
    </Router>
  );
};

const HeaderControl = () => {
  const location = useLocation();
  const [renderedHeader, setRenderedHeader] = useState(null);

  useEffect(() => {
    
    if (location.pathname.startsWith("/dashboard")) {
      setRenderedHeader(<Header2 />);
    } else {
      setRenderedHeader(<Header />);
    }
  }, [location.pathname]); 

  return renderedHeader;
};

export default App;