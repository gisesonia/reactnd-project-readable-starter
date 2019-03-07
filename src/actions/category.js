import axios from "axios";


const API_URL = "http://localhost:3001"
axios.defaults.headers.common["Authorization"] = "qualquer_coisa";

export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_CATEGORY_POSTS = 'fetch_category_posts';


 export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES,
    categories
  };
}

export function fetchCategories() {

  return dispatch => {
    axios.get(`${API_URL}/categories`)
      .then(res => dispatch(fetchCategoriesSuccess(res.data)));

  }
}

export function fetchCategoryPosts(category) {
  return dispatch => {
    axios.get(`${API_URL}/${category}/posts`)
      .then(res => dispatch({ type: FETCH_CATEGORY_POSTS, payload: res.data }))
      .catch(err => console.log(err));
  }
}
    
  