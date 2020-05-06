import React, { useState } from "react";

export const CatchThemAllContext = React.createContext([[], () => {}]);

export function CatchThemAllProvider(props) {
  const [catchedPokemons, setCatchedPokemons] = useState([]);

  const addCatchedPokemon = (name, url) =>
    setCatchedPokemons([...catchedPokemons, { name, url }]);

  return (
    <CatchThemAllContext.Provider
      value={{
        catchedPokemons,
        addCatchedPokemon,
      }}
    >
      {props.children}
    </CatchThemAllContext.Provider>
  );
}
