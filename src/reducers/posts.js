import { RECEIVE_POSTS } from "../actions/posts";
import { ADD_POST } from "../actions/posts";

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case ADD_POST:
      return [...state, action.newpost];
    default:
      return state;
  }
}
