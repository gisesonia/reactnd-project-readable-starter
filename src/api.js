import axios from 'axios';

// ajuda para entender request do axios mentor Eric Gruby

axios.defaults.headers.common['Authorization'] = 'qualquer_coisa';

const API_URL = 'http://localhost:3001';

//Ajuda com criação dos requests Cláudio Rocha

export const fetchComments = (postId) =>
  axios({
    url: API_URL + `/posts/${postId}/comments`,
    method: "GET"
  }).then(response => {
    //console.log(response.data);
    return response.data;
  });


export const fetchCategories = () =>
  axios({
    url: API_URL + '/categories',
    method: 'GET',
  }).then(response => {
    return response.data;
  });


const getPosts = () =>
  axios({
    url: API_URL + '/posts',
    method: 'GET',
  }).then(response => {
    return response.data;
  });

  export const APIfetchPost = (id) =>
    axios({
      url: API_URL + `/posts/${id}`,
      method: 'GET',
    }).then(response => {
      console.log(response)
      return response.data;
    });
  

export const APIaddposts = post =>
  axios({
    url: API_URL + '/posts',
    method: 'POST',
    data: {post}
  }).then(response => {
    return response.data;
  });

  export const APIdelPosts = id =>
  axios({
    url: API_URL + `/posts/${id}`,
    method: 'DELETE'
  }).then(response => {
    return response.data;
  });

export default getPosts;