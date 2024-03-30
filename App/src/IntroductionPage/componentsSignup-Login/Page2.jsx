import React from 'react';
import {Route, Routes,  } from 'react-router-dom';

import SignUp from './Signup'; // Import your SignUp component
import Login from './Loginin';

const Page2 = () => {
  
  return (
      <div>
                <SignUp /> 

        <Routes>
        <Route path="/Page-SignUp" element={<SignUp />}/>

        <Route path="/Page-Login" element={<Login />}/>
        </Routes>
    </div>
  );
};

export default Page2;
