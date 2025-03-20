import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
      box-sizing:border-box;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    
    :root {
      --light-color: #fff;
      --dark-color: #000;
      --accent-color: #dc143c;
      --background-color: #f6f6f6;
      --border-color: #e2e2e2;
      --input-color: #ececec;
      --emotion-01: #64c964;
      --emotion-02: #9dd772;
      --emotion-03: #fdce17;
      --emotion-04: #fd8446;
      --emotion-05: #fd565f;
      --nanum-font: "Nanum Pen Script";
      --yeonsung-font: "Yeon Sung";
    }

    html {
      font-size: 62.5%
    }

    body {
      width: 100%;
      font-size: 1.6rem;
      font-family: var(--nanum-font);
      background: var(--background-color);
      display: flex;
      justify-content: center;
    }

    #root {
      width: 100%;
      max-width: 600px;
      height: 100%;
      min-height: 100vh;
      background: var(--light-color);
      box-shadow: 0 7px 28px rgba(100, 100, 100, 0.2);
      padding: 10px;
    }
`;

export default GlobalStyles;
