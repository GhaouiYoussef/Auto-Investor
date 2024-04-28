import React, { useState } from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PaidIcon from '@mui/icons-material/Paid';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import QueryStats from '@mui/icons-material/QueryStats';
import LogoutIcon from '@mui/icons-material/Logout';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import ClearIcon from '@mui/icons-material/Clear';

const Sidebar = () => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleSidebar = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className={`Sidebar ${isHidden ? 'hidden' : ''}`}>
            <div className="top">
]                {/* Button to toggle visibility */}
                <button onClick={toggleSidebar}><MenuIcon/></button>
                {isHidden && (
                    <button onClick={toggleSidebar}>Show Sidebar</button>
                )}
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <Link to="/Dashboard/PortfolioSummary" style={{ textDecoration: 'none' }}>
                            <SummarizeIcon className='icon' />
                            <span>Portfolio Summary</span>
                        </Link>
                    </li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <Link to="/Dashboard/TransactionHistory" style={{ textDecoration: 'none' }}>
                            <PaidIcon className='icon' />
                            <span>Transaction History</span>
                        </Link>
                    </li>
                    <li>
                        <QueryStats className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Auto-Investment Settings</span>
                    </li>
                    <li>
                        <CurrencyBitcoinIcon className='icon' />
                        <span>Market Overview</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Link to="/Dashboard/profile" style={{ textDecoration: 'none' }}>
                            <PersonIcon className='icon' />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/Page-Login" style={{ textDecoration: 'none' }}>
                            <LogoutIcon className='icon' />
                            <span>Logout</span>
                        </Link>
                    </li>
                    <li>
                        <ContactSupportIcon className='icon' />
                        <span>Support</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;
