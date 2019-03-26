import axios from "axios";

const API_URL = "http://localhost:3001";

//Ajuda com criação dos requests Cláudio Rocha

axios.defaults.headers.common["Authorization"] = "qualquer_coisa";

const getPosts = () =>
  axios({
    url: `${API_URL}/posts`,
    method: "GET"
  }).then(response => {
    return response.data;
  });

export const APIfetchPost = id => {
  return axios({
    url: `${API_URL}/posts/${id}`,
    method: "GET"
  }).then(response => {
    return response.data;
  });
};

export const fetchCategories = () => {
  return axios({
    url: `${API_URL}/categories`,
    method: "GET"
  }).then(response => {
    return response.data;
  });
};

export const APIaddposts = post => {
  return axios({
    url: `${API_URL}/posts`,
    method: "POST",
    data: { ...post }
  }).then(response => {
    return response.data;
  });
};

export const APIdelPosts = id => {
  return axios({
    url: `${API_URL}/posts/${id}`,
    method: "DELETE"
  }).then(response => {
    return response.data;
  });
};

export const APIfetchComments = postid => {
  return axios({
    url: `${API_URL}/posts/${postid}/comments`,
    method: "GET"
  }).then(response => {
    console.log(response.data)
    return response.data;
  });
};

export const APIfetchComment = commentId => {
  return axios({
    url: `${API_URL}/comments/${commentId}`,
    method: "GET"
  }).then(response => {
    return response.data;
  });
};

export const APIeditPost = (id, values) => {
  return axios({
    url: `${API_URL}/posts/${id}`,
    method: "PUT",
    data: { ...values }
  }).then(response => {
    console.log(response.data)
    return response.data;
  });
};

export const APIvotePost = (id, vote) => {
  return axios({
    url:`${API_URL}/posts/${id}`,
    method: 'POST',   
    data: ({ option: vote })
  }).then(response => {
    console.log(response)
   return response.data
  })
};



export default getPosts;
