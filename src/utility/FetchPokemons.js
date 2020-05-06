import axios from "axios";

import { pokemonApiUrls } from "./Globals";

export async function fetchAllPokemons() {
  const resp = await axios.get(pokemonApiUrls.pokemons);
  return resp.data.results;
}

export function fetchCatchedPokemons(catchedPokemons) {
  return Promise.resolve(catchedPokemons);
}
