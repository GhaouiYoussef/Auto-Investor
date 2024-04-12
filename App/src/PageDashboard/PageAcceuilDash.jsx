import React from 'react';
import axios from "axios";

const PageAcceuilDash = () => {
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

//const PageAcceuilDash = () => {
  // const Layout = () => {
    return (
      <div >
        <div className="containerP">
          <div className="menuContainer">
          </div>
        </div>

      </div>
    );
}
export default PageAcceuilDash