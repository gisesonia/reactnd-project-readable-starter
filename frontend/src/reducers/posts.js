import { RECEIVE_POSTS } from "../actions/posts";
import { ADD_POST } from "../actions/posts";
import { EDIT_POST } from "../actions/posts";
import { DELETE_POST } from "../actions/posts";
import { FETCH_POST } from "../actions/posts";
import { VOTE_POST } from "../actions/posts";

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case ADD_POST:
      return [...state, action.newpost];
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates
          };
        } else {
          return post;
        }
    });
    case DELETE_POST:
      return state.filter(post => post.id !== action.id);
    case VOTE_POST:
      return {
        ...state,     
        [action.id]: action.voteScore
      };
    default:
      return state;
  }
}

export function post(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...action.post };
    default:
      return state;
  }
}
