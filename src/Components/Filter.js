import React from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from '../Constants/PokemonTypes';

const Filter = ({ changePokemon }) => (
  <div>
    <select name="category" onChange={changePokemon}>
      { ['ALL', ...PokemonTypes].map(PokemonType => (
        <option key={PokemonType} value={PokemonType}>
          { PokemonType }
        </option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  changePokemon: PropTypes.func.isRequired,
};

export default Filter;
