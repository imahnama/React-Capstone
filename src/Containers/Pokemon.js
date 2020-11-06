/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetPokemon } from '../Actions/pokemonActions';

const Pokemon = ({ match }) => {
  const pokemonName = match.params.pokemon;
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
              <p key={el.stat.name}>
                {el.stat.name}
                {' '}
                {el.base_stat}
              </p>
            ))}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map(el => <p key={el.ability.name}>{el.ability.name}</p>)}
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

Pokemon.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.shape({
      pokemon: PropTypes.string,
    }),
  }).isRequired,
};

export default Pokemon;
