import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${({ height }) => height && `height: ${height}px`};
  display: block;
  margin: 0 auto;
  padding: 16px;
  line-height: 20px;
  resize: none;
`;

const TextInput = ({ height, value, onChange }) => {
  return <StyledTextarea height={height} value={value} onChange={onChange} />;
};

export default TextInput;
