import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <div className="children-container">
          <Outlet />
        </div>
      </main>
      {location === "/" && <Footer />}
    </>
  );
};

export default Layout;
