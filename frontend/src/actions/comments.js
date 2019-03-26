import {  APIfetchComments } from "../api";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function handleComments(idpost) {
  return dispatch => {
    return APIfetchComments(idpost).then(comment =>
      dispatch(receiveComments(comment))
    );
  };
}
