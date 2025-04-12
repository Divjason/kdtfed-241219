import React from "react";
import { useSelector } from "react-redux";
import GrandBox from "./GrandBox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <>
      <div>This is Box {count}</div>
      <GrandBox />
    </>
  );
};

export default Box;
