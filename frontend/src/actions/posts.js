import { v4 } from "uuid";
import {
  APIaddposts,
  APIdelPosts,
  APIfetchPost,
  APIfetchComments
} from "../api";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const FETCH_POST = "FETCH_POST";
export const FETCH_COMMENT = "FETCH_COMMENT";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function fetchPost(post) {
  return {
    type: FETCH_POST,
    post
  };
}

export const loadpost = idpost => {
  return dispatch => {
    return APIfetchPost(idpost).then(idp => {
      dispatch(fetchPost(idp));
    });
  };
};

export const deletePost = params => {
  return {
    type: DELETE_POST,
    id: params.id
  };
};

export const delpost = idpost => {
  return dispatch => {
    return APIdelPosts(idpost).then(idp => {
      dispatch(deletePost(idp));
    });
  };
};

export const addPost = newpost => ({
  type: ADD_POST,
  newpost
});

export const createPost = newpost => {
  //console.log(newpost)
  const post = {
    id: v4(),
    timestamp: Date.now(),
    ...newpost
  };
  return dispatch => {
    return APIaddposts(post).then(newp => {
      dispatch(addPost(newp));
    });
  };
};
