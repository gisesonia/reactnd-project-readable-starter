import { RECEIVE_CATEGORIES } from '../actions/category';

//ajuda do mentor Cláudio Rocha

function categories(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

export default categories;