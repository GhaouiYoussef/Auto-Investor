import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from './componentsGeneral/Header';
import Hero from './componentsPageDacceuil/Hero';
import HowItWorks from './componentsPageDacceuil/HowItWorks';
import Features from './componentsPageDacceuil/features';
import SignUp from './componentsOFPAGE2/Signup'; // Import your SignUp component
import PageClient from './pageClient';
import Page2 from './componentsOFPAGE2/Page2';
import PageDacceuil from './componentsPageDacceuil/PageDacceuil';
import AboutUs from './ComponentsAboutUs/AboutUs';
import OurServices from './Com_Services/ourServices';
import Contact from './Com_contact/contact';
import FAQ from './Com_faq/faq';
import Currency from './Com_currency/currency';
import OurTeam from './Com_team/Team';


const App = () => {

  return (
    <Router>
      <div>
        <Header /> {/* Render the Header component */}

        <Routes>
          <Route path="/" element={<PageDacceuil />} />
          <Route path="/Page-Signup" element={<Page2 />}
          />
          <Route path="/OurServices" element={<OurServices />} />

          <Route path="/AboutUs" element={<AboutUs />}
          />
          <Route path="/Contact" element={<Contact />}
          />
          <Route path="/faq" element={<FAQ />}
          />
          <Route path="/currency" element={<Currency />}
          />
          <Route path="/team" element={<OurTeam />}
          />

        </Routes>

      </div>
    </Router>
  );
};

export default App;
