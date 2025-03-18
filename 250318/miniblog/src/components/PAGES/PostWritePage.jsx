import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostWritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextInput
          height={400}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default PostWritePage;
