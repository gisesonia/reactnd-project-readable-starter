import axios from 'axios';

// ajuda para entender request do axios mentor Eric Gruby

axios.defaults.headers.common['Authorization'] = 'qualquer_coisa';

const API_URL = 'http://localhost:3001';

//Ajuda com criação dos requests Cláudio Rocha

//Ajuda com criação dos requests mentores Cláudio Rocha e Erick Grub

const getPosts = () => {
  return axios.get(`${API_URL}/posts`).then(response => {
    return response.data;
  });
};

export const fetchCategories = () => {
  return axios.get(`${API_URL}/categories`).then(response => {
    return response.data;
  });
};

export const APIaddposts = post => {
  return axios
    .post(`${API_URL}/posts`, {...post})
    .then(response => {
      return response.data;
    })
    .catch(erro => console.log(erro));
};

export const APIdelPosts = id => {
  return axios
    .get(`${API_URL}/posts/${id}`,id)
    .then(response => {
      return response.data;
    })
    .catch(erro => console.log(erro));
};

export const APIfetchPost = (id) => {
  axios.get(`${API_URL}/posts/${id}`)
  .then(response => {
  console.log(response)
  return response.data;
})
}


export const fetchComments = postId => {
  return axios
    .get(`${API_URL}/posts/${postId}/comments`)
    .then(response => {
      return response.data;
    })
    .catch(erro => console.log(erro));
};

export default getPosts;

