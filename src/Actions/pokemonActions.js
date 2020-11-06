import axios from 'axios';

export const CHANGE_FILTER = 'CHANGE_FILTER';

export const GetPokemonList = () => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING',
    });

    const perPage = 16;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}`);
    const pokemonData = await Promise.all(res.data.results.map(async pokemon => {
      const pokemonRecord = await axios.get(pokemon.url);
      return pokemonRecord.data;
    }));

    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: pokemonData,
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
