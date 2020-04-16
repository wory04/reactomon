import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CatchThemAllContext from "../../context/CatchThemAllContext";

const PokeBallButton = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-size: cover;
  position: absolute;
  top: 25px;
  right: 25px;
  background-image: url("/pokeball.png");
  &:hover {
    background-image: url("/pokeball_open.png");
  }
`;

function PokeBall(props) {
  const [catchedPokemons, setCatchedPokemons] = useContext(CatchThemAllContext);

  function CatchPokemon() {
    setCatchedPokemons([
      ...catchedPokemons,
      { name: props.name, url: props.url },
    ]);
  }

  return (
    <PokeBallButton onClick={CatchPokemon} alt="pokeball"></PokeBallButton>
  );
}

PokeBall.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokeBall;
