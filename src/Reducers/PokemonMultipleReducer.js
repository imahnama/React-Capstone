/* eslint-disable no-unused-vars */
const DefaultState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const PokemonMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'POKEMON_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'POKEMON_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to get pokemon',
      };
    case 'POKEMON_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default PokemonMultipleReducer;
