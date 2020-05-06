import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import PokeBall from "../poke-ball/PokeBall";

const PokemonImg = styled.img`
  margin-top: 20px;
  width: 60%;
`;

const PokemonName = styled.h3`
  color: ${(props) => props.theme.PokemonNameColor};
  font-family: "Courier New", Courier, monospace;
`;

const StyledPokemonCard = styled.div`
  width: 180px;
  height: 180px;
  text-align: center;
  display: inline-block;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: ${(props) => props.theme.PokemonCardBackgroundColor};
`;

const PokemonCardWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

function PokemonCard(props) {
  const [id, setId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get(props.url).then((resp) => {
      setId(resp.data.id);
      setImageUrl(resp.data.sprites.front_default);
    });
  }, [props.url]);

  return (
    <PokemonCardWrapper>
      <Link to={`/pokemon/${id}`}>
        <StyledPokemonCard>
          <PokemonImg src={imageUrl} alt={props.name} />
          <PokemonName>{props.name}</PokemonName>
        </StyledPokemonCard>
      </Link>
      {props.isCatchable && <PokeBall name={props.name} url={props.url} />}
    </PokemonCardWrapper>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isCatchable: PropTypes.bool.isRequired,
};

export default PokemonCard;
