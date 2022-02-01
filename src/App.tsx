import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global-styles";
import theme from "./styles/theme";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {/**/}
        {/**/}
      </ThemeProvider>
    </div>
  );
}

export default App;
