import React from 'react';
import axios from "axios";

import Sidebar from "./Sidebar/Sidebar";
import Widget from "./widget/Widget";
import Featured from './featured/Featured';
import Chart from './chart/Chart';
const PageAcceuilDash = () => {
  axios.defaults.withCredentials = true;// to force credentials to every Axios requests
const handleLogout = () => {
  
  axios
    .get("http://localhost:3001/logout")
    .then((res) => {
      if (res.data.status === "200") {
        window.location.href = '/';
      } else {
        alert("error");
      }
    })
    .catch((err) => console.log(err));
};

  return (
    <div className="PageAcceuilDash">
      <Sidebar />
      <div className="homeContainer">
      <div className="widgets">
        <Widget type ='CryptoTrends' />
        <Widget type ="balance"/>
        <Widget type="autoInvestTransactions"/>

      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
      
      </div>
      
    </div>
  )
}

export default PageAcceuilDash;