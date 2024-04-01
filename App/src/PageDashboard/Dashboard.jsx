

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './Profile';
import PageAcceuilDash from './PageAcceuilDash';
import Packages from "./Packages";

const Dashboard = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/Dashboard/PageAcceuilDash" element={<PageAcceuilDash />} />
        <Route path="/Dashboard/Profile" element={<Profile />} />
        <Route path="/Dashboard/Packages" element={<Packages />} />
      </Routes>

      </div>
    </Router>
  )
}

export default Dashboard

