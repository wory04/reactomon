import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import PokemonCard from "../pokemon-card/PokemonCard";

const StyledPokemonList = styled.div`
  display: block;
  padding: 40px;
  width: 960px;
  margin: auto;
  border-radius: 20px;
  background-color: ${(props) => props.theme.ListBackgroundColor};
`;

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    props.FetchPokemons().then((resp) => {
      setPokemons(resp);
    });
  }, [props]);

  return (
    <StyledPokemonList>
      {pokemons.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          url={pokemon.url}
          isCatchable={props.isCatchable}
          key={pokemon.url}
        />
      ))}
    </StyledPokemonList>
  );
}

PokemonList.propTypes = {
  FetchPokemons: PropTypes.func.isRequired,
  isCatchable: PropTypes.bool.isRequired,
};

export default PokemonList;
