import axios from 'axios';

// ajuda para entender request do axios mentor Eric Gruby

axios.defaults.headers.common['Authorization'] = 'qualquer_coisa';

const API_URL = 'http://localhost:3001';

//Ajuda com criação dos requests mentores Cláudio Rocha e Erick Grub

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

export const APIfetchPost = (id) => {
  axios({
    url: API_URL + `/posts/${id}`,
    method: 'GET',
  }).then(response => {
    return response.data;
  })
}


export const APIaddposts = (newpost) => {
  console.log(newpost)
  return (
    axios({
      url: API_URL + '/posts',
      method: 'POST',
      data: {
        ...newpost
      }
    })
  )
}

export const APIdelPosts = id =>
  axios({
    url: API_URL + `/posts/${id}`,
    method: 'DELETE',
    data: {
      id
    }
  }).then(response => {
    return response.data;
  });

export default getPosts;



