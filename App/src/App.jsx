import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
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


const App = () => {

  return (
    <Router>
      <div>
        <Header /> {/* Render the Header component */}

        <Routes>
          <Route path="/" element={<PageDacceuil />} />
          <Route path="/Page-Signup" element={<Page2 />}/>
          <Route path="/Page-Login" element={<Login />}/>
          {/* just hatit login toul , maghir maamlt page */}
          
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
