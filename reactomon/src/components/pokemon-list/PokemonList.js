import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import PokemonCard from "../pokemon-card/PokemonCard";
import ThemeContext from "../../context/ThemeContext";
import AppTheme from "../../context/Colors";

import "./PokemonList.css";

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    props.FetchPokemons().then(resp => {
      setPokemons(resp);
    });
  }, [props]);

  return (
    <div
      className="pokemon-list"
      style={{
        backgroundColor: `${currentTheme.ListBackgroundColor}`
      }}
    >
      {pokemons.map(pokemon => (
        <PokemonCard
          name={pokemon.name}
          url={pokemon.url}
          isCatchable={props.isCatchable}
          key={pokemon.url}
        />
      ))}
    </div>
  );
}

PokemonList.propTypes = {
  FetchPokemons: PropTypes.func.isRequired,
  isCatchable: PropTypes.bool.isRequired
};

export default PokemonList;
