import { v4 } from "uuid";
import {  APIaddposts,  APIdelPosts,  APIfetchPost, APIeditPost, APIvotePost } from "../api";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const FETCH_POST = "FETCH_POST";
export const VOTE_POST = "VOTE_POST";
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

export const editPost = (params) => {
return{ 
  type: EDIT_POST,
  id: params.id,
  updates: {...params}
};

}

export const postEdit = (idpost, values) => {
  const updatepost = {
      id: values.id,
      title: values.title,
      body: values.body
  }
  return dispatch => {
    return APIeditPost(idpost, updatepost).then((idp,upost) => {
      dispatch(editPost(idp,upost))
    });
  };
};

const votePost = ({ id, voteScore }) => {
  console.log(id)
  return {
    type: VOTE_POST,
    id,
    voteScore
  };
};

export const voteScorePost = (id, vote) => {
  //console.log(id);
  return dispatch => {
    return APIvotePost(id, vote).then((id, vtp) => {
      dispatch(votePost(id, vtp));
    });
  };
};

/* const votePost = (voteScore) => {
  return {
    type: VOTE_POST,
    voteScore
  }
}

export const voteScorePost = (id, vote) => {
  console.log(id)
 return dispatch => {
   return APIvotePost(id,vote).then((vt)=>{
    dispatch(votePost(vt));
   })
 }    
};
 */