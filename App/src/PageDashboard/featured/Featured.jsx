import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Totale revenue made today</p>
        <p className="amount">69$</p>
        <p className="desc">previous transactions processing</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">AutoInvestor Goal</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
            </div>
            <div className="resultAmount">420$</div>
          </div>
          <div className="item">
            <div className="itemTitle">AutoInvestor Goal</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
            </div>
            <div className="resultAmount">420$</div>
          </div>
          <div className="item">
            <div className="itemTitle">AutoInvestor Goal</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
            </div>
            <div className="resultAmount">420$</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Featured