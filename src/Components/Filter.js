/* eslint-disable react/prop-types */
import React from 'react';
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

export default Filter;
