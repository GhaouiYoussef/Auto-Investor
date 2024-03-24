import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentsGeneral/Header';
import Hero from './componentsPageDacceuil/Hero';
import HowItWorks from './componentsPageDacceuil/HowItWorks';
import Features from './componentsPageDacceuil/features';
import SignUp from './componentsOFPAGE2/Signup'; // Import your SignUp component
import PageClient from './pageClient';
import Page2 from './componentsOFPAGE2/Page2';
import PageDacceuil from './componentsPageDacceuil/PageDacceuil';

const App = () => {
      
  return (
    <Router>
      <div>
        <Header /> {/* Render the Header component */}

    <Routes>
      <Route path="/" element={<PageDacceuil />} />
      <Route path="/Page-Signup" element={<Page2 />} />
    </Routes>

      </div>
    </Router>
  );
};

export default App;
