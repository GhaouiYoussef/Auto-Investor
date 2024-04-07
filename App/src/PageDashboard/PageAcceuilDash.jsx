import './styles/global.scss'
import React from 'react';
import { Link, Route, Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Packages from "./Packages";
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Menu from './menu/Menu';
import Logout from './logout/Logout';
import axios from "axios";


const PageAcceuilDash = () => {
  axios.defaults.withCredentials = true;// to force credentials to every Axios requests
  const navigate = useNavigate();
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
        {/* <Navbar /> */}
        <div className="containerP">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
          <button onClick={handleLogout}>Logout</button>
            <Outlet />
          </div>
        </div>
        <div className='input'>
        <button onClick={handleLogout}>Logout</button>
        </div>
        <Footer />
      </div>
    );
  

  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/Dashboard",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "PageAcceuilDash",
  //         element: <PageAcceuilDash />
  //       },
  //       {
  //         path: "profile",
  //         element: <Profile />
  //       },
  //       {
  //         path: "packages",
  //         element: <Packages />
  //       },

  //     ]
  //   },
  //   {
  //     path: "/Dashboard/logout",
  //     element: <Logout />
  //   }
  // ]);

  // return <RouterProvider router={router} />;
};
export default PageAcceuilDash