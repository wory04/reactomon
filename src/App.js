import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/pokemon-list/PokemonList";
import TypeList from "./components/type-list/TypeList";
import PokemonDetail from "./components/pokemon-detail/PokemonDetail";
import styled, { ThemeProvider } from "styled-components";

import CatchThemAllContext from "./context/CatchThemAllContext";
import {
  FetchAllPokemons,
  FetchCatchedPokemons,
} from "./utility/FetchPokemons";

import "./App.css";
import AppTheme from "./context/Colors";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.BackgroundColor};
  height: 100%;
  min-height: 100vh;
`;

function App() {
  const [catchedPokemons, setCatchedPokemons] = useState([]);
  const [currentTheme, setCurrentTheme] = useState("turquoise");

  return (
    <ThemeProvider theme={AppTheme[currentTheme]}>
      <StyledContainer>
        <CatchThemAllContext.Provider
          value={[catchedPokemons, setCatchedPokemons]}
        >
          <Router>
            <div className="App">
              <Navbar
                changeTheme={() =>
                  setCurrentTheme(
                    currentTheme === "turquoise" ? "crimson" : "turquoise"
                  )
                }
              />
              <Route exact path={["/", "/pokemons"]}>
                <PokemonList FetchPokemons={FetchAllPokemons} isCatchable />
              </Route>
              <Route path="/types" component={TypeList} />
              <Route path="/pokemon/:id" component={PokemonDetail} />
              <Route path="/catched">
                <PokemonList
                  FetchPokemons={() => FetchCatchedPokemons(catchedPokemons)}
                  isCatchable={false}
                />
              </Route>
            </div>
          </Router>
        </CatchThemAllContext.Provider>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
