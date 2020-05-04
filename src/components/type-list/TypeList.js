import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import ThemeContext from "../../context/ThemeContext";
import AppTheme from "../../context/Colors";

const StyledTypeList = styled.div`
  display: block;
  padding: 40px;
  width: 960px;
  margin: auto;
  border-radius: 20px;
  & li {
    list-style-type: none;
    text-align: center;
  }
  & h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

function TypeList() {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then((resp) => {
      setPokemonTypes(resp.data.results);
    });
  }, []);

  return (
    <StyledTypeList
      style={{
        backgroundColor: `${currentTheme.ListBackgroundColor}`,
      }}
    >
      <h2>Pokemon types</h2>
      <ul>
        {pokemonTypes.map((pokemonType) => (
          <li key={pokemonType.name}>{pokemonType.name}</li>
        ))}
      </ul>
    </StyledTypeList>
  );
}

export default TypeList;
