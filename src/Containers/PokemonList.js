import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemonList, ChangeFilter } from '../Actions/pokemonActions';
import Pokemon from '../Components/Pokemon';
import Filter from '../Components/Filter';

const PokemonList = () => {
  const dispatch = useDispatch();

  const PokemonList = useSelector(state => state.PokemonList.data);
  const filter = useSelector(state => state.filter);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  React.useEffect(() => {
    FetchData(1);
  }, []);

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
