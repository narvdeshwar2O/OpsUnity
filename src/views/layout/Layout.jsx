import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location=useLocation()
  console.log(location)
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <div className="children-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
