import { RECEIVE_COMMENTS } from "../actions/comments";
import { FETCH_COMMENT } from "../actions/comments";
import { ADD_COMMENT } from "../actions/comments";
import  { EDIT_COMMENT } from "../actions/comments";
import  { DELETE_COMMENT } from "../actions/comments";
import  { VOTE_COMMENTS } from "../actions/comments";

export default function comments(state = {}, action) {
  const { comment } = action;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      return {
      ...state,
      comments: {
        ...state.comments,
        [comment.id]: comment.newcomment
      }
    };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: comment
        }
      }
    default:
      return state;
  }
}
