import PokemonMultipleReducer from '../../Reducers/PokemonMultipleReducer';

describe('Pokemon Multiple Reducer', () => {
  it('Should return default state', () => {
    const newState = PokemonMultipleReducer(undefined, { loading: false, data: {}, errorMsg: '' });
    expect(newState).toEqual({ loading: false, data: {}, errorMsg: '' });
  });
});
