import React, { Component } from "react";
import axios from "axios";

import "./TypeList.css";


class TypeList extends Component {
    state = {
        pokemonTypes: []
    }
  
    componentDidMount() {
        axios
          .get('https://pokeapi.co/api/v2/type')
          .then(resp => {
              this.setState({ pokemonTypes: resp.data.results });
          })
    }
  
    render() {
      return (
        <div className="type-list">
          <h2>Pokemon types</h2>
          <ul>
              {this.state.pokemonTypes.map(x => <li>{x.name}</li>)}
          </ul>
        </div>
      );
    }
}

export default TypeList;