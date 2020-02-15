import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/pokemon-list/PokemonList";
import TypeList from "./components/type-list/TypeList";
import PokemonDetail from "./components/pokemon-detail/PokemonDetail";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path={["/", "/pokemons"]} component={PokemonList} />
          <Route path="/types" component={TypeList} />
          <Route path="/pokemon/:id" component={PokemonDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
