import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
      box-sizing: border-box;
    }

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    :root {
      --light-color: #fff;
      --dark-color: #000;
      --accent-color: #dc143c;
      --border-color: #ccc;
      --background-color: #eee;
      --button-color: #ff5722;
    }

    html {
      font-size: 62.5%;
    }

    body {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 1.6rem;
      background: var(--background-color);
    }
`;

export default GlobalStyles;
