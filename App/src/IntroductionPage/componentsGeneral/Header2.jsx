import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logoooo.png';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";


  function Header2({ setLoginData = () => {} }) {

        // Add a state to manage the authentication status
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        // UseEffect to check authentication status on component mount
        useEffect(() => {
          const authStatus = localStorage.getItem('isAuthenticated') === 'true';
          setIsAuthenticated(authStatus);
        }, []);



    const [isHidden, setIsHidden] = useState(false);

    const toggleSidebar = () => {
        setIsHidden(!isHidden);
    };

    axios.defaults.withCredentials = true;// to force credentials to every Axios requests
  const handleLogout = () => {
    
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          window.location.href = '/';
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
      console.log('logout');
      localStorage.removeItem("loginData");
      setLoginData(null);


      // isAuthenticated.current = true;
      console.log('isAuthenticated', isAuthenticated);
      localStorage.setItem('isAuthenticated', 'false'); // Store the value in localStorage
      
      return false;// Return false after executing the logout function
  };
  return (


    <header className={`header-section clearfix `}>
    <div className="container-fluid">
      {/* Button to toggle visibility */}
      <a className='user' onClick={toggleSidebar}><MenuIcon /></a>
      {isHidden && (  <a className='user' onClick={toggleSidebar}><MenuIcon />ff</a> )}

        <div>
          <a href="/" className="site-logo">
            <img src={logoImage} className='rr' alt="Logo" />
          </a>



          <header className={`user ${isHidden ? 'hidden' : ''}`}></header>


          <div className='site-btn' onClick={handleLogout}>Log Out</div>
          <nav className="main-menu">
            <ul className="menu-list">
              <li><Link to='/Dashboard/Profile'>Predict</Link></li>
              <li><Link to='/Dashboard/PageAcceuilDash'>Home</Link></li>
              <li><Link to="/Dashboard/Packages">Offers</Link></li>
              <li><Link to="/Dashboard/Currency">Buy/Sell</Link></li>
            </ul>
          </nav>
        </div>
    </div>
  </header>
);
}

export default Header2;
