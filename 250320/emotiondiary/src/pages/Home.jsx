import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";

const Home = () => {
  return (
    <div>
      <Header
        title="Home"
        leftChild={
          <Button
            text="긍정버튼"
            type="positive"
            onClick={() => {
              alert("긍정");
            }}
          />
        }
        rightChild={
          <Button
            text="부정버튼"
            type="negative"
            onClick={() => {
              alert("부정");
            }}
          />
        }
      />
      <Editor />
    </div>
  );
};

export default Home;
