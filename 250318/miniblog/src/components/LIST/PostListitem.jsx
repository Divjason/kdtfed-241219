import React from "react";
import styled from "styled-components";
import VideoList from "./VideoList";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  border: 1px solid grey;
  border-radius: 8px;
  padding: 16px;
  background: var(--primary-light-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #d3d3d3;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListitem = ({ post, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <VideoList thumbnailUrl={post.thumbnailUrl} videoUrl={post.videoUrl} />
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
};

export default PostListitem;
