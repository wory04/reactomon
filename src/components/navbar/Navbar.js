import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ThemeToggler from "../theme-toggler/ThemeToggler";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.LinkColor};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 10px 20px 40px 20px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.LinkBackgroundColor};
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

const StyledNavbar = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  width: 960px;
  background-color: ${(props) => props.theme.BackgroundColor};
`;

function Navbar(props) {
  return (
    <StyledNavbar>
      <ThemeToggler changeTheme={props.changeTheme} />
      <PokemonLogo src="/pokemon-logo.png" alt="Pokemon" />
      <StyledLink to="/pokemons">Pokemons</StyledLink>
      <StyledLink to="/types">Types</StyledLink>
      <StyledLink to="/catched">Catched</StyledLink>
    </StyledNavbar>
  );
}

export default Navbar;
