/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetPokemon } from '../Actions/pokemonActions';

const Pokemon = props => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);
  React.useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div data-testid="pokemon" className="pokemon-wrapper card d-flex flex-row w-50 ml-3">
          <div className="images">
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="item ml-5">
            <h1>Stats</h1>
            {pokeData.stats.map(el => (
              <p>
                {el.stat.name}
                {' '}
                {el.base_stat}
              </p>
            ))}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map(el => <p>{el.ability.name}</p>)}
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== '') {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };
  return (
    <div className="card d-flex">
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
