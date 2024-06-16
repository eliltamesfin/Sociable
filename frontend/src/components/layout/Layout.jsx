import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import NavBar from "../nav/NavBar";
import "./Layout.css";

function Layout() {
  return (
    <div>
      <Header />
      <div className="content">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
