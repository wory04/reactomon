import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./PokemonCard.css";

function PokemonCard(props) {
  const [id, setId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get(props.url).then(resp => {
      setId(resp.data.id);
      setImageUrl(resp.data.sprites.front_default);
    });
  }, [props.url]);

  return (
    <Link to={`/pokemon/${id}`}>
      <div className="pokemon-card">
        <img src={imageUrl} alt={props.name}></img>
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PokemonCard;
