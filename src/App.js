import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/pokemon-list/PokemonList";
import TypeList from "./components/type-list/TypeList";
import PokemonDetail from "./components/pokemon-detail/PokemonDetail";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./context/Colors";
import CatchThemAllContext from "./context/CatchThemAllContext";
import {
  FetchAllPokemons,
  FetchCatchedPokemons
} from "./utility/FetchPokemons";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("turquoise");
  const currentTheme = AppTheme[theme];
  const [catchedPokemons, setCatchedPokemons] = useState([]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div
        className="container"
        style={{
          backgroundColor: `${currentTheme.BackgroundColor}`,
          height: "100%",
          minHeight: "100vh"
        }}
      >
        <CatchThemAllContext.Provider
          value={[catchedPokemons, setCatchedPokemons]}
        >
          <Router>
            <div className="App">
              <Navbar />
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
