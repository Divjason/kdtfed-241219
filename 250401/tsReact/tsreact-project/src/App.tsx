import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";

const Title = styled.h1`
  /* background: var(--dark-color);
  color: var(--light-color); */
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Title>Hello World!</Title>
    </>
  );
}

export default App;
