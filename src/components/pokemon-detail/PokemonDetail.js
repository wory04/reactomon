import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";

import PokeBall from "../poke-ball/PokeBall";
import { pokemonApiUrls } from "../../utility/Globals";

const StyledPokemonDetail = styled.div`
  text-align: center;
  padding: 40px;
  width: 960px;
  margin: auto;
  border-radius: 20px;
  position: relative;
  background-color: ${(props) => props.theme.ListBackgroundColor};
  & img:first-of-type {
    padding: 20px;
    width: 20%;
  }
`;

function PokemonDetail(props) {
  const pokemonUrl = `${pokemonApiUrls.pokemons}/${props.match.params.id}/`;
  const [detailedPokemon, setDetailedPokemon] = useState({});

  useEffect(() => {
    axios.get(pokemonUrl).then((resp) => {
      setDetailedPokemon({
        name: resp.data.name,
        abilities: resp.data.abilities.map((e) => e.ability.name),
        types: resp.data.types.map((e) => e.type.name),
        height: resp.data.height,
        weight: resp.data.weight,
        imageUrl: resp.data.sprites.front_default,
      });
    });
  }, [pokemonUrl]);

  return (
    <StyledPokemonDetail>
      <img src={detailedPokemon.imageUrl} alt={detailedPokemon.name} />
      <h2>{detailedPokemon.name}</h2>
      <p>Height: {detailedPokemon.height} dm</p>
      <p>Weight: {detailedPokemon.weight} hg</p>
      <div className="abilities">
        <h4>Abilities:</h4>
        <span>{(detailedPokemon.abilities || []).join(", ")}</span>
      </div>
      <div className="types">
        <h4>Types:</h4>
        <span>{(detailedPokemon.types || []).join(", ")}</span>
      </div>
      <PokeBall name={detailedPokemon.name} url={pokemonUrl} />
    </StyledPokemonDetail>
  );
}

PokemonDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default PokemonDetail;
