import { APIfetchComments } from "../api";
import { APIfetchComment } from "../api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const FETCH_COMMENT = "FETCH_COMMENT";

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function handleComments(postId) {
  return dispatch => {
    return APIfetchComments(postId).then(comments =>
      dispatch(receiveComments(comments))
    );
  };
}

export function fetchComment(postid) {
  return {
    type: FETCH_COMMENT,
    postid
  };
}

export const loadcomment = idpost => {
  return dispatch => {
    return APIfetchComment(idpost).then(idp => {
      dispatch(fetchComment(idp));
    });
  };
};

