import React from "react";
import styled from "styled-components";
import CommentListitem from "./CommentListitem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const CommentList = ({ comments }) => {
  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentListitem key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
};

export default CommentList;
