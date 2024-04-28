import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logoooo.png';
import './Header.css';

  import axios from "axios";

  function Header2(handleLogoutFromApp) {
    axios.defaults.withCredentials = true;// to force credentials to every Axios requests
  const handleLogout = (setLoginData) => {
    
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
      console.log('logout');
      localStorage.removeItem("loginData");
      setLoginData(null);
      return false;// Return false after executing the logout function
  };
  return (
    <header className="header-section clearfix">
      <div className="container-fluid">
        <a href="" className="site-logo">
          <img src={logoImage} className='rr' alt="Logo" />
        </a>
        <div className="responsive-bar"><i className="fa fa-bars"></i></div>
        <a href="" className="user"><i className="fa fa-user"></i></a>
        {/* <div className='site-btn' onClick={handleLogout}>Log Out</div> */}
        <div className='site-btn' onClick={() => handleLogoutFromApp(handleLogout())}>Log Out</div>

        <nav className="main-menu">
          <ul className="menu-list">
            <li><Link to='/Dashboard/Profile'>Profile</Link></li>
            <li><Link to='/Dashboard/PageAcceuilDash'>Home</Link></li>
            <li><Link to="/Dashboard/Packages">Offers</Link></li>
            <li><Link to="/">Currency</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header2;
