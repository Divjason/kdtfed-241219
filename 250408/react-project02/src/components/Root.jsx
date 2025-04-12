import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>Hello World!</div>
      <Outlet />
    </>
  );
};

export default Root;
