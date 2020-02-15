import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PokemonCard from "../pokemon-card/PokemonCard";

import "./PokemonList.css";

import ThemeContext from "../../context/ThemeContext";
import AppTheme from "../../context/Colors";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(resp => {
      setPokemons(resp.data.results);
    });
  }, []);

  return (
    <div
      className="pokemon-list"
      style={{
        backgroundColor: `${currentTheme.ListBackgroundColor}`
      }}
    >
      {pokemons.map(pokemon => (
        <PokemonCard name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export default PokemonList;
