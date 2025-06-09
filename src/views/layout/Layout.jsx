import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
