import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "./PokemonDetail.css";

class PokemonDetail extends Component {
  state = {
    name: null,
    abilities: [],
    types: [],
    height: null,
    weight: null,
    imageUrl: null
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
      .then(resp =>
        this.setState({
          name: resp.data.name,
          abilities: resp.data.abilities.map(e => e.ability.name),
          types: resp.data.types.map(e => e.type.name),
          height: resp.data.height,
          weight: resp.data.weight,
          imageUrl: resp.data.sprites.front_default
        })
      );
  }

  render() {
    return (
      <div className="pokemon-detail">
        <img src={this.state.imageUrl} alt={this.state.name} />
        <h2>{this.state.name}</h2>
        <p>Height: {this.state.height} dm</p>
        <p>Weight: {this.state.weight} hg</p>
        <div className="abilities">
          <h4>Abilities:</h4>
          <span>{this.state.abilities.join(", ")}</span>
        </div>
        <div className="types">
          <h4>Types:</h4>
          <span>{this.state.types.join(", ")}</span>
        </div>
      </div>
    );
  }
}

PokemonDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
};

export default PokemonDetail;
