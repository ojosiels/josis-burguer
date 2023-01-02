import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { DarkModeContext } from "./contexts/darkModeContext";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyles";
import { themes } from "./styles/themes";

function App() {
  const { currentTheme } = useContext(DarkModeContext);

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
      </ThemeProvider>
      <HomePage />
    </>
  );
}

export default App;
