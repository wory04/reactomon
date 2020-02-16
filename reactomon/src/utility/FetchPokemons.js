import axios from "axios";

export function FetchAllPokemons() {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(resp => resp.data.results);
}

export function FetchCatchedPokemons(catchedPokemons) {
  return Promise.resolve(catchedPokemons);
}
