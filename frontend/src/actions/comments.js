import { v4 } from "uuid";
import {  APIfetchComments, APIfetchComment, APIaddcomments,  APIeditComment } from "../api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const FETCH_COMMENT = "RECEIVE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const VOTE_COMMENTS = "VOTE_COMMENTS";

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

export function fetchComment(comment) {
  return {
    type: FETCH_COMMENT,
    comment
  };
}

export const loadcomment = idcomment => {
  return dispatch => {
    return APIfetchComment(idcomment).then(idc => {
      dispatch(fetchComment(idc));
    });
  };
};

export const addComment = (newcomment) => {
  console.log(newcomment)
  return {
    type: ADD_COMMENT,
    newcomment
  };
}


export const createComment = newcomment => {
   const comment = {
    id: v4(),
    timestamp: Date.now(),
    parentId: newcomment.parentId,
    ...newcomment
  };
  return dispatch => {
    return APIaddcomments(comment).then((com) => {
      dispatch(addComment(com));
    });
  };
};

export const editComment = params => {
  console.log(params);
  return {
    type: EDIT_COMMENT,
    id: params.id,
    updates: { ...params }
  };
};

export const commentEdit = (idcomment, values) => {
  return dispatch => {
    return APIeditComment(idcomment, values).then(comment => {
      console.log(comment);
      dispatch(editComment(comment));
    });
  };
};
