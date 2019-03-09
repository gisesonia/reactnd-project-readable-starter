import uuid from "uuid";
import getCategories from "../api";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_CATEGORY = "CATEGORY";

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function handleCategories() {
  return dispatch => {
    return getCategories().then(categories =>  dispatch(receiveCategories(categories)));
  };
} 


function receiveCategories(category) {
  return {
    type: RECEIVE_CATEGORIES,
    category
  };
} 

export const addPost = ({ timestamp, title, body, author, category }) => ({
  type: ADD_POST,
  newpost: {
    id: uuid(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  }
});
