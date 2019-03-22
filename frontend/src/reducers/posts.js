import { RECEIVE_POSTS } from "../actions/posts";
import { ADD_POST } from "../actions/posts";
import { DELETE_POST } from "../actions/posts";
import { FETCH_POST } from "../actions/posts";

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case ADD_POST:
      return [...state, action.newpost];
    case DELETE_POST:
      return state.filter(post => post.id !== action.id); 
    default:
      return state;
  }
}

export function post(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    console.log(action.post)
      return { ...action.post };
    default:
      return state;
  }
}
