import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import ThemeContext from "../../context/ThemeContext";
import AppTheme from "../../context/Colors";

const PokemonImg = styled.img`
  margin-top: 20px;
  width: 60%;
`;

const PokemonName = styled.h3`
  color: #2f4858;
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
`;

function PokemonCard(props) {
  const [id, setId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    axios.get(props.url).then(resp => {
      setId(resp.data.id);
      setImageUrl(resp.data.sprites.front_default);
    });
  }, [props.url]);

  return (
    <Link to={`/pokemon/${id}`}>
      <StyledPokemonCard
        style={{
          backgroundColor: `${currentTheme.PokemonCardBackgroundColor}`
        }}
      >
        <PokemonImg src={imageUrl} alt={props.name} />
        <PokemonName>{props.name}</PokemonName>
      </StyledPokemonCard>
    </Link>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PokemonCard;
