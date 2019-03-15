import { RECEIVE_POSTS } from "../actions/posts";

export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return false;
    default:
      return state;
  }
}
