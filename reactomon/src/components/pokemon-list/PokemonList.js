import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../pokemon-card/PokemonCard";

import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(resp => {
      setPokemons(resp.data.results);
    });
  }, []);

  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => (
        <PokemonCard name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export default PokemonList;
