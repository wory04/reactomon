import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import "./PokemonCard.css";

class PokemonCard extends Component {
    state = {
        id: "",
        imageUrl: "",
    }

    componentDidMount() {
        axios
            .get(this.props.url)
            .then(resp => this.setState({
                id: resp.data.id,
                imageUrl: resp.data.sprites.front_default, 
            }))
    }

    render() {
        return (
            <Link to={`/pokemon/${this.state.id}`}>
                <div className="pokemon-card">
                    <img src={this.state.imageUrl} alt={this.props.name}></img>
                    <p>{this.props.name}</p>    
                </div>
            </Link>
        )
    }
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
}

export default PokemonCard;