import React from "react";
import Header from "./Header";
import Desktop from "./Desktop";
import Noiser from "./effects/Noiser";

const Layout = ({ children }) => {
  return (
    <>
      <Noiser />
      <Header />
      <Desktop />
    </>
  );
};

export default Layout;
