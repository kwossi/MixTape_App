import React from "react";
import Header from "./Header";
import Sidebar from "../Create/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="layout">
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="wrapper">
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
