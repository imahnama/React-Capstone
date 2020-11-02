/* eslint-disable  no-unused-vars */
/* eslint-disable  no-use-before-define */
/* eslint-disable  react/jsx-key */
/* eslint-disable  no-undef */
/* eslint-disable  react/button-has-type */
/* eslint-disable  react/prop-types */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { GetPokemonList } from '../Actions/pokemonActions';

const PokemonList = props => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const PokemonList = useSelector(state => state.PokemonList);
  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (!_.isEmpty(PokemonList.data)) {
      return (
        <div className="list-wrapper">
          {PokemonList.data.map(el => (
            <div className="pokemon-item card">
              <p>{el.name}</p>
              <Link to={`/pokemon/${el.name}`}>View</Link>
            </div>
          ))}
          ;
        </div>
      );
    }

    if (PokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (PokemonList.errorMsg !== '') {
      return <p>{PokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <div>
        <p>Search:</p>
        <input type="text" onChange={e => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
        {ShowData()}
      </div>
    </div>
  );
};

export default PokemonList;
