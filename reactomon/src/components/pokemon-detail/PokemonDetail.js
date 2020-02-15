import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "./PokemonDetail.css";

function PokemonDetail(props) {
  const [name, setName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`)
      .then(resp => {
        setName(resp.data.name);
        setAbilities(resp.data.abilities.map(e => e.ability.name));
        setTypes(resp.data.types.map(e => e.type.name));
        setHeight(resp.data.height);
        setWeight(resp.data.weight);
        setImageUrl(resp.data.sprites.front_default);
      });
  }, [props.match.params.id]);

  return (
    <div className="pokemon-detail">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>Height: {height} dm</p>
      <p>Weight: {weight} hg</p>
      <div className="abilities">
        <h4>Abilities:</h4>
        <span>{abilities.join(", ")}</span>
      </div>
      <div className="types">
        <h4>Types:</h4>
        <span>{types.join(", ")}</span>
      </div>
    </div>
  );
}

PokemonDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
};

export default PokemonDetail;
