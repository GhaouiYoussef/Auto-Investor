import './Widget.scss';
import { useState } from 'react'; // Import useState hook
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const Widget = ({ type }) => {
    let data = {};

    // temporary 
    const amount = 100;
    const percent = 20;
    switch (type) {
        case "CryptoTrends":
            data = {
                title: "Trends", // Use string value
                isMoney: false,
                link: "see crypto Trends",
                icon: <TrendingUpIcon className='icon' style={{ color: "green", backgroundColor: "rgba(225,0,0,0.2)", }} />,
            };
            break;

        case "balance":
            data = {
                title: "Balance", // Use string value
                isMoney: true,
                link: "see current balance",
                icon: <AccountBalanceWalletIcon className='icon' style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)", }} />,
            };
            break;
        case "autoInvestTransactions":
            data = {
                title: "Transactions", // Use string value
                isMoney: false,
                link: "see transactions",
                icon: <CurrencyExchangeIcon className='icon' style={{ color: "gold", backgroundColor: "rgba(0,128,0,0.2)", }} />,
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${percent > 0 ? 'positive' : 'negative'}`}> {/* Use ternary operator for conditional class */}
                    <KeyboardArrowUpIcon />
                    {percent}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;
