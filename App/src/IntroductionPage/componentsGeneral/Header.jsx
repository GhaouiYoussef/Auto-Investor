import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './perfectlogo-transparent.png';


import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header-section clearfix">
      <div className="container-fluid">
        <a href="index.html" className="site-logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="responsive-bar"><i className="fa fa-bars"></i></div>
        <a href="" className="user"><i className="fa fa-user"></i></a>
        <Link to='/Page-Signup' className='site-btn'>Sign Up For Free</Link>
        <nav className="main-menu">
          <ul className="menu-list">
          <li> <Link to='/'>Home </Link></li>
            
            <li><Link to='/AboutUs'> About Us</Link></li>

            <li><Link to='/OurServices' >Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/currency">Currency</Link></li>
              <li><Link to="/team">Team</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


// function Header() {
//   return (
//     <header className='header'>
//       <div className='header__inner'>
//         <div className='header__logo'>
        
//         <Link className='Titre' to='/'>
//         <img src={logoImage} alt="Crypto-APP Logo" />Crypto-APP</Link>
//         </div>
//         <nav className='header__nav'>
//           {/* humbuger */}
//           <div class="ham" >
//             <div class="bar1"></div>
//             <div class="bar2"></div>
//             <div class="bar3"></div>
//           </div>
//           <ul className='header__nav-list'>
//             <ul className='header__nav-listWest'>
{/* <li> <Link to='/'>Home </Link></li>
            
<li><Link to='/AboutUs'> About Us</Link></li>

<li><Link to='/OurServices' >Services</Link></li>
<li><Link to="/contact">Contact Us</Link></li>
  <li><Link to="/faq">FAQ</Link></li>
  <li><Link to="/currency">Currency</Link></li>
  <li><Link to="/team">Team</Link></li> */}
//             </ul>
            
//           </ul>

//         </nav>
//         <div className='sgnp'>
//         <li><Link to='/Page-Signup' className='button button--secondary'>Sign Up</Link> {/* Link to the sign-up page */}</li>
//         </div>

//       </div>
//     </header>
//   );
// }

// export default Header;