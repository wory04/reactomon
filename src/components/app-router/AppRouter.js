import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import PokemonList from "../pokemon-list/PokemonList";
import TypeList from "../type-list/TypeList";
import PokemonDetail from "../pokemon-detail/PokemonDetail";

import { CatchThemAllContext } from "../../context/CatchThemAllContext";

import {
  FetchAllPokemons,
  FetchCatchedPokemons,
} from "../../utility/FetchPokemons";

function AppRouter(props) {
  const { catchedPokemons } = useContext(CatchThemAllContext);

  return (
    <Router>
      <div className="App">
        <Navbar changeTheme={props.changeTheme} />
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
  );
}

export default AppRouter;
