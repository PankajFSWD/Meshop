import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
