import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 2rem;
  font-family: var(--nanum-font);
  ${({ type }) =>
    type === "positive"
      ? `background: #64c964; color: #fff`
      : type === "negative"
      ? `background: #fd565f; color: #fff`
      : `background: #ccc; color: #000`};
  cursor: pointer;
`;

const Button = ({ text, type, onClick }) => {
  return (
    <ButtonItem type={type} onClick={onClick}>
      {text || "button"}
    </ButtonItem>
  );
};

export default Button;
