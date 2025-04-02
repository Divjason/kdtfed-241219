import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
