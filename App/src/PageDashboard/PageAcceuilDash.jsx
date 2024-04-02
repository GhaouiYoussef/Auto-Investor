import './styles/global.scss'
import React from 'react';
import { Link, Route, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from './Profile';
import Packages from "./Packages";
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Menu from './menu/Menu';
import Logout from './logout/Logout';

const PageAcceuilDash = () => {
  // const Layout = () => {
    return (
      <div >
        {/* <Navbar /> */}
        <div className="containerP">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
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