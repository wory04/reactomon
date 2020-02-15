import React from 'react'
import { Link } from "react-router-dom";

import "./layout.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Pokemons</h1>
      <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link>
    </div>
  )
}

export default Navbar;