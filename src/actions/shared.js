import getPosts from "../api";
import APIaddposts from "../api"; 
import { receivePosts } from "./posts";
import { addPost } from "./posts";

export function handleInitialData() {
  return dispatch => {
    return getPosts().then(posts => {
      //console.log(posts);
      dispatch(receivePosts(posts));
    });
  };
}

export const createpost = newpost => {
  return dispatch => {
    return APIaddposts().then(newp => {
      dispatch(addPost(newp));
    });
  };
};
