import React from "react";
import Header from "./Header";
import Desktop from "./Desktop";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Layout = ({ children }) => {
  const handle = useFullScreenHandle(false);

  return (
    <FullScreen handle={handle}>
      <Header handle={handle} />
      <Desktop />
    </FullScreen>
  );
};

export default Layout;