import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { CatchThemAllProvider } from "./context/CatchThemAllContext";
import AppRouter from "./components/app-router/AppRouter";

import AppTheme, { colorThemes } from "./context/Colors";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.BackgroundColor};
  height: 100%;
  min-height: 100vh;
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(colorThemes.turquoise);

  return (
    <ThemeProvider theme={AppTheme[currentTheme]}>
      <StyledContainer>
        <CatchThemAllProvider>
          <AppRouter
            changeTheme={() =>
              setCurrentTheme(
                currentTheme === colorThemes.turquoise
                  ? colorThemes.crimson
                  : colorThemes.turquoise
              )
            }
          />
        </CatchThemAllProvider>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
