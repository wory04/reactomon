import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "../pokemon-card/PokemonCard";

import "./PokemonList.css"

class PokemonList extends Component {
  state = {
      pokemons: []
  }

  componentDidMount() {
      axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(resp => {
            this.setState({ pokemons: resp.data.results });
        })
  }

  render() {
    return (
      <div className="pokemon-list">
            {this.state.pokemons.map(pokemon =>
                <PokemonCard
                    name={pokemon.name}
                    url={pokemon.url}
                />
            )}
      </div>
    );
  }
}

export default PokemonList;