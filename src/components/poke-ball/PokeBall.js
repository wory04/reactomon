import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { CatchThemAllContext } from "../../context/CatchThemAllContext";

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
  const { addCatchedPokemon } = useContext(CatchThemAllContext);

  function CatchPokemon() {
    addCatchedPokemon(props.name, props.url);
  }

  return <PokeBallButton onClick={CatchPokemon} alt="pokeball" />;
}

PokeBall.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokeBall;
