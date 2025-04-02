import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    :root {
      --light-color: #fff;
      --dark-color: #000;
      --border-color: #ccc;
      --accent-color: #dc143c;
      --button-color: #ff5722;
    }

    * {
      box-sizing: border-box;
    }

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
`;

export default GlobalStyles;
