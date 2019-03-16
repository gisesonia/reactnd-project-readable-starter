import { fetchComments } from "../api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function handleComments(postId) {
  return dispatch => {
    return fetchComments(postId).then(comments =>
      dispatch(receiveComments(comments))
    );
  };
}