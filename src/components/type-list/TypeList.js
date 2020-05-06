import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { pokemonApiUrls } from "../../utility/Globals";

const StyledTypeList = styled.div`
  display: block;
  padding: 40px;
  width: 960px;
  margin: auto;
  border-radius: 20px;
  background-color: ${(props) => props.theme.ListBackgroundColor};
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

  useEffect(() => {
    axios.get(pokemonApiUrls.pokemonTypes).then((resp) => {
      setPokemonTypes(resp.data.results);
    });
  }, []);

  return (
    <StyledTypeList>
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
