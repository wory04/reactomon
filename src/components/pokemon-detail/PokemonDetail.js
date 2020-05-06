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
  const [name, setName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get(pokemonUrl).then((resp) => {
      setName(resp.data.name);
      setAbilities(resp.data.abilities.map((e) => e.ability.name));
      setTypes(resp.data.types.map((e) => e.type.name));
      setHeight(resp.data.height);
      setWeight(resp.data.weight);
      setImageUrl(resp.data.sprites.front_default);
    });
  }, [pokemonUrl]);

  return (
    <StyledPokemonDetail>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>Height: {height} dm</p>
      <p>Weight: {weight} hg</p>
      <div className="abilities">
        <h4>Abilities:</h4>
        <span>{abilities.join(", ")}</span>
      </div>
      <div className="types">
        <h4>Types:</h4>
        <span>{types.join(", ")}</span>
      </div>
      <PokeBall name={name} url={pokemonUrl} />
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
