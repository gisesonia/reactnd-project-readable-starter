import { fetchCategories } from '../api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  };
}

export function handleCategories() {
  return dispatch => {
    return fetchCategories().then(categories =>
      dispatch(receiveCategories(categories))
    );
  };
}