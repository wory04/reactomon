import React, { Component } from 'react'
import axios from 'axios';

import "./PokemonCard.css";

class PokemonCard extends Component {
    state = {
        imageUrl: "",
    }

    componentDidMount() {
        axios
            .get(this.props.url)
            .then(resp => this.setState({imageUrl: resp.data.sprites.front_default}))
    }

    render() {
        return (
            <div className="pokemon-card">
                <img src={this.state.imageUrl} alt={this.props.name}></img>
                <p>{this.props.name}</p>    
            </div>
        )
    }
}

export default PokemonCard;