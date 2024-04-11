import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './perfectlogo-transparent.png';
import './Header.css';

  import axios from "axios";

  function Header2() {
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
    <header className="header-section clearfix">
      <div className="container-fluid">
        <a href="index.html" className="site-logo">
          <img src={logoImage} alt="Logo" />
        </a>
        <div className="responsive-bar"><i className="fa fa-bars"></i></div>
        <a href="" className="user"><i className="fa fa-user"></i></a>
        <div className='site-btn' onClick={handleLogout}>Log Out</div>
        <nav className="main-menu">
          <ul className="menu-list">
            <li><Link to='/'>Profile</Link></li>
            <li><Link to='/OurServices'>Home</Link></li>
            <li><Link to="/contact">Offers</Link></li>
            <li><Link to="/currency">Currency</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header2;
