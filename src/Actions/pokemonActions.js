/* eslint-disable  import/prefer-default-export */
/* eslint-disable  no-unused-vars */
import axios from 'axios';

export const CHANGE_FILTER = 'CHANGE_FILTER';

export const GetPokemonList = page => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING',
    });

    const perPage = 16;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}`);

    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_LIST_FAIL',
    });
  }
};

export const GetPokemon = pokemon => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_MULTIPLE_LOADING',
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: 'POKEMON_MULTIPLE_SUCCESS',
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_MULTIPLE_FAIL',
    });
  }
};

export const ChangeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
