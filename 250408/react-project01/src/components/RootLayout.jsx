import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>Hello World! ^^</div>
      <Outlet />
    </>
  );
};

export default RootLayout;
