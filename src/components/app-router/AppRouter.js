import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "../navbar/Navbar";
import PokemonList from "../pokemon-list/PokemonList";
import TypeList from "../type-list/TypeList";
import PokemonDetail from "../pokemon-detail/PokemonDetail";

import { CatchThemAllContext } from "../../context/CatchThemAllContext";
import {
  fetchAllPokemons,
  fetchCatchedPokemons,
} from "../../utility/FetchPokemons";
import { routes } from "../../utility/Globals";

function AppRouter(props) {
  const { catchedPokemons } = useContext(CatchThemAllContext);

  return (
    <Router>
      <div className="App">
        <Navbar changeTheme={props.changeTheme} />
        <Route exact path={["/", routes.pokemons]}>
          <PokemonList fetchPokemons={fetchAllPokemons} isCatchable />
        </Route>
        <Route path={routes.types} component={TypeList} />
        <Route path={`${routes.pokemon}/:id`} component={PokemonDetail} />
        <Route path={routes.catched}>
          <PokemonList
            fetchPokemons={() => fetchCatchedPokemons(catchedPokemons)}
            isCatchable={false}
          />
        </Route>
      </div>
    </Router>
  );
}

AppRouter.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default AppRouter;
