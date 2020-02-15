import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TypeList.css";

function TypeList() {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then(resp => {
      setPokemonTypes(resp.data.results);
    });
  }, []);

  return (
    <div className="type-list">
      <h2>Pokemon types</h2>
      <ul>
        {pokemonTypes.map(pokemonType => (
          <li>{pokemonType.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TypeList;
