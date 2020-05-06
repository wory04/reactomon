import React, { useState } from "react";

export const CatchThemAllContext = React.createContext([[], () => {}]);
let counter = 0;

export function CatchThemAllProvider(props) {
  const [catchedPokemons, setCatchedPokemons] = useState([]);

  const addCatchedPokemon = (name, url) =>
    setCatchedPokemons([
      ...catchedPokemons,
      { key: `catched-${++counter}`, name, url },
    ]);

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
