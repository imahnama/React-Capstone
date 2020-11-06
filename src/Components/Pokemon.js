import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => (
  <div className="poke  m-2 card p-5">
    <div className="pokemon-item">
      <p className="font-weight-bold text-capitalize par">{pokemon.name}</p>
      <Link to={`/pokemon/${pokemon.name}`} className="link">View</Link>
    </div>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
