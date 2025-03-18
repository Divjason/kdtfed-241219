import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import MainPage from "./components/PAGES/MainPage";
import PostWritePage from "./components/PAGES/PostWritePage";
import PostViewPage from "./components/PAGES/PostViewPage";

const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
