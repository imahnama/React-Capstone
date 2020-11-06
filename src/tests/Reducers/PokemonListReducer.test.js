import PokemonListReducer from '../../Reducers/PokemonListReducer';

describe('Pokemon Reducer', () => {
  it('Should return default state', () => {
    const newState = PokemonListReducer(undefined, {
      lcount: 0, data: [], errorMsg: '', loading: false,
    });
    expect(newState).toEqual({
      count: 0, data: [], errorMsg: '', loading: false,
    });
  });
});
