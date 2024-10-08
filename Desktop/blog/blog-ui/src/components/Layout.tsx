import React from "react";
import Nav from "./header/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      {children}
    </>
  );
};

export default Layout;
