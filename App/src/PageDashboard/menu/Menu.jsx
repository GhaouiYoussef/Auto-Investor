import React from 'react';
import './menu.scss';
import homeIcon from './icons/home-icon.png';
import { Link } from 'react-router-dom';
import profile from './icons/profile.png';
import portfolio from './icons/portfolio.jpg';
import transactions from "./icons/transactions.png"
import analysis from "./icons/analysis.png"
import history from "./icons/history.png"
import ChartBox from '../chartBox/ChartBox';
import topBox from '../topBox/TopBox';
const Menu = () => {
  return (
    <div className='menu'>

      <div className='content'>
        <div className="box box1">
          <topBox/>
          
        </div>
        <div className="box box2"><ChartBox /></div>
        <div className="box box3"><ChartBox /></div>
        <div className="box box4"><ChartBox /></div>
        <div className="box box5">box5</div>
        <div className="box box6"></div>
        <div className="box box7"></div>
        <div className="box box8"></div>
        <div className="box box9"></div>
      </div>

    </div>

  );
};

export default Menu;

// partie hethy tokhrej ml hamburger icon ki lecran yekgha w mafamech blasa, sinon tokood fil header mel fouk
{/* <div className='menuPure'>
<div className="item">
    <span className="title">MAIN</span>
    <Link to="/" className='listItem'>
      <img src={homeIcon} alt="" className='icon' />
      <span className="listItemTitle">HomePage</span>
    </Link>
    <Link to="/" className='listItem'>
      <img src={profile} alt="" className='icon' />
      <span className="listItemTitle">Profile</span>
    </Link>
  </div>
  <div className="item" >
    <span className="title">My Dashboard</span>
    <Link to="/" className='listItem'>
      <img src={portfolio} alt="" className='icon' />
      <span className="listItemTitle">Portfolio</span>
    </Link>
    <Link to="/" className='listItem'>
      <img src={transactions} alt="" className='icon' />
      <span className="listItemTitle">Transactions</span>
    </Link>
    <Link to="/" className='listItem'>
      <img src={analysis} alt="" className='icon' />
      <span className="listItemTitle">Market Analysis</span>
    </Link>
    <Link to="/" className='listItem'>
      <img src={history} alt="" className='icon' />
      <span className="listItemTitle">Transaction History</span>
    </Link>
  </div>
</div> */}
