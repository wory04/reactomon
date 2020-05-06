import axios from "axios";

export function fetchAllPokemons() {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((resp) => resp.data.results);
}

export function fetchCatchedPokemons(catchedPokemons) {
  return Promise.resolve(catchedPokemons);
}
