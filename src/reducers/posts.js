import { RECEIVE_POSTS } from "../actions/posts";
import { ADD_POST } from "../actions/posts";
import { LOAD_POST } from "../actions/posts";
import { DELETE_POST } from "../actions/posts";

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case LOAD_POST:
      return action.post;
    case ADD_POST:
      return [...state, action.newpost];
    case DELETE_POST:
      const filteredpost = state.filter(({ id }) => id !== action.id)
      const index = filteredpost.indexOf(action.id);

      const postslice = [
        ...state.slice(0, index)
      ];
      return postslice;
    default:
      return state;
  }
}
