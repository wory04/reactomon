import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./TypeList.css";

import ThemeContext from "../../context/ThemeContext";
import AppTheme from "../../context/Colors";

function TypeList() {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then(resp => {
      setPokemonTypes(resp.data.results);
    });
  }, []);

  return (
    <div
      className="type-list"
      style={{
        backgroundColor: `${currentTheme.ListBackgroundColor}`
      }}
    >
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
