import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./layout.css";

const StyledLink = styled(Link)`
  color: #ffdc83;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 10px 20px 40px 20px;
  padding: 8px 16px;
  background-color: #265fa5;
  display: inline-block;
  border-radius: 8px;
  width: 150px;
`;

const PokemonLogo = styled.img`
  width: 400px;
  display: block;
  padding: 10px;
  margin: 20px auto;
`;

function Navbar() {
  return (
    <div className="navbar">
      <PokemonLogo src="/pokemon-logo.png" alt="Pokemon" />
      <StyledLink to="/pokemons">Pokemons</StyledLink>
      <StyledLink to="/types">Types</StyledLink>
    </div>
  );
}

export default Navbar;
