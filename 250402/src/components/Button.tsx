import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  background: var(--button-color);
  color: var(--light-color);
  padding: 8px 16px;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}

// const Button = ({ label, onClick }: Props) => {
//   return <Container onClick={onClick}>{label}</Container>;
// };

class Button extends Component<Props> {
  render() {
    const { label, onClick } = this.props;
    return <Container onClick={onClick}>{label}</Container>;
  }
}

export default Button;
