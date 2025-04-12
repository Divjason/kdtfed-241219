import React from "react";
import { useSelector } from "react-redux";

const GrandBox = () => {
  const count = useSelector((state) => state.count);
  return <div>This is GrandBox {count}</div>;
};

export default GrandBox;
