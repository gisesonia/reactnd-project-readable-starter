import getPosts from "../api";
import { receivePosts } from "./posts";


export function handleInitialData() {
  return dispatch => {
    return getPosts().then(posts => {
      //console.log(posts);
      dispatch(receivePosts(posts));
    });
  };
}


