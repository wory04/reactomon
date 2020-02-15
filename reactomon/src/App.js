import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/pokemon-list/PokemonList";
import TypeList from "./components/type-list/TypeList";
import PokemonDetail from "./components/pokemon-detail/PokemonDetail";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./context/Colors";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("turquoise");
  const currentTheme = AppTheme[theme];

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
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path={["/", "/pokemons"]} component={PokemonList} />
            <Route path="/types" component={TypeList} />
            <Route path="/pokemon/:id" component={PokemonDetail} />
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
