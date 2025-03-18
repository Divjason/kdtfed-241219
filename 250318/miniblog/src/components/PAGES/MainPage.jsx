import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../LIST/PostList";
import Button from "../UI/Button";
import data from "../../data.json";

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

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          title={"글 작성하기"}
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
