import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 16px 0;
`;

const Label = styled.h1`
  font-size: 2.4rem;
`;

interface Props {
  readonly label: string;
}

const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Title;
