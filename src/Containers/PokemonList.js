/* eslint-disable  no-unused-vars */
/* eslint-disable  no-use-before-define */
/* eslint-disable  react/jsx-key */
/* eslint-disable  no-undef */
/* eslint-disable  react/button-has-type */
/* eslint-disable  react/prop-types */
/* eslint-disable  react/no-unused-prop-types */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { GetPokemonList, ChangeFilter } from '../Actions/pokemonActions';
import Pokemon from '../Components/Pokemon';
import Filter from '../Components/Filter';

const PokemonList = props => {
  const dispatch = useDispatch();

  const PokemonList = useSelector(state => state.PokemonList.data);
  const filter = useSelector(state => state.filter);

  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const changePokemon = ({ target }) => {
    dispatch(ChangeFilter(target.value));
  };

  const filteredPokemons = () => (filter === 'ALL' ? PokemonList : PokemonList.filter(pokemon => {
    const arr = pokemon.types;

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].type.name === filter) return true;
    }
    return false;
  }));

  return PokemonList === null ? <h1>Loading....</h1> : (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Filter changePokemon={changePokemon} />
      </div>
      <div className="list-wrapper">
        {filteredPokemons().map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
