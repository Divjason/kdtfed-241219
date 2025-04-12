import styled from "styled-components";

const Container = styled.div`
  background: var(--light-color);
  /* width: calc(100% - 40px); */
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <Title>블로그포스트</Title>
    </Container>
  );
};

export default Header;
