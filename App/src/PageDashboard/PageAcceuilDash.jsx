import Sidebar from "./Sidebar/Sidebar";
import './PageAccueilDash.scss';
import Widget from "./widget/Widget";
import Featured from './featured/Featured';
import Chart from './chart/Chart';

const PageAcceuilDash = () => {
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