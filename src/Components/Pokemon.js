/* eslint-disable  react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => (
  <div className="poke  m-2 card p-5">
    <div className="pokemon-item">
      <p className="font-weight-bold text-capitalize par">{pokemon.name}</p>
      <Link to={`/pokemon/${pokemon.name}`} className="link">View</Link>
    </div>
  </div>
);

export default Pokemon;
