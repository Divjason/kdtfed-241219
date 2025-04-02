import styled from "styled-components";

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.4rem;
`;

interface Props {
  readonly data: number;
}

const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};

export default Label;
