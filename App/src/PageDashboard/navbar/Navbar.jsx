import React from 'react'
import './navbar.scss'
import searchIcon from './images/search.svg';
import appIcon from './images/app.svg';
import expandIcon from './images/expand.svg';
import notificationIcon from './images/notification.svg';
import settingsIcon from './images/settings.svg';
import logoIcon from './images/logo.svg';

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>CryptoPal</span>
      </div>
      <div className="icons">
        <img src={searchIcon} alt="" className="icon" />
        <img src={appIcon} alt="" className="icon" />
        <img src={expandIcon} alt="search" className="icon" />
        <div className="notification">
          <img src={notificationIcon} alt="" className="icon"  />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://media.licdn.com/dms/image/D4E03AQF9Ms5h1q8juw/profile-displayphoto-shrink_400_400/0/1690034433229?e=1717632000&v=beta&t=EO7NFDdGpiGOnmfdTP_P_pIq7U6UXI5aGEHO7pWbCRg" alt =""/>
          <span>username</span>
        </div>
        <img src={settingsIcon} alt="" className="icon" />
      </div>
    </div>

  )
}

export default navbar