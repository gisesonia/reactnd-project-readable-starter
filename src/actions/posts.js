import uuid from "uuid";
import { APIaddposts } from "../api"; 
import { APIfetchPost } from "../api"; 
import {APIdelPosts} from "../api"; 
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const LOAD_POST = "LOAD_POST";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";


export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function loadPost(post) {
  return {
    type: LOAD_POST,
    post
  }
}

export const fetchPost = (id) => {
  return dispatch => {
    return APIfetchPost(id).then(pid => {
      dispatch(loadPost(pid))
    })
  }
}

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id,
  }
}

export const delpost = (idpost) => {
  return dispatch => {
    return APIdelPosts(idpost).then(idp => {
      dispatch(deletePost(idp));
    })
  }
}


export const createpost = newpost => {
  const post = {
    ...newpost,
    timestamp: Date.now(),
    id: uuid(),
  }
  return dispatch => {
    return APIaddposts(post).then(newp => {
      dispatch(addPost( newp ));
    });
  };
};

export const addPost = (newpost) => ({
  type: ADD_POST,
  newpost
});
