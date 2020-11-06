import { CHANGE_FILTER } from '../Actions/pokemonActions';

const changeFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default changeFilter;
