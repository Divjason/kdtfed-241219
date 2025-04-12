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
      --border-color: #ccc;
      --accent-color: #dc143c;
    }

    html {
      font-size: 62.5%;
    }

    body {
      width: 100%;
      height: 100vh;
      font-size: 1.6rem;
      background: url("https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?cs=srgb&dl=pexels-brett-sayles-1431822.jpg&fm=jpg") center/cover no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export default GlobalStyles;
