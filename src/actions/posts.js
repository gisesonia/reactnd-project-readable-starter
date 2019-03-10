import uuid from "uuid";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
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
