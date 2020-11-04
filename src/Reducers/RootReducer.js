import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonMultipleReducer from './PokemonMultipleReducer';
import changeFilter from './filter';

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  filter: changeFilter,
});

export default RootReducer;
