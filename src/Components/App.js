import React from 'react';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import PokemonList from '../Containers/PokemonList';
import Pokemon from '../Containers/Pokemon';

function App() {
  return (
    <div className="app">
      <nav className="nav-content d-flex justify-content-center">
        <NavLink to="/">Home</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:pokemon" exact component={Pokemon} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
